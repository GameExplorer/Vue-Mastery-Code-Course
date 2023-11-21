import { Form as VeeForm, Field as VeeFields, defineRule, ErrorMessage, configure } from 'vee-validate';
import {
    required, min, max, alpha_spaces as alphaSpaces, email, min_value as minValue,
    max_value as maxValue, confirmed, not_one_of as excluded} from '@vee-validate/rules';

// Registering the rule globally.

export default {   
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeFields', VeeFields);
        app.component('ErrorMessage', ErrorMessage);

        defineRule('required', required); // Registering the rule globally.
        defineRule('tos', required)
        defineRule('min', min); 
        defineRule('max', max); 
        defineRule('alpha_spaces', alphaSpaces); 
        defineRule('email', email);
        defineRule('min_value', minValue);
        defineRule('max_value', maxValue);
        defineRule('passwords_mismatch', confirmed);
        defineRule('excluded', excluded);
        defineRule('country_excluded', excluded);
 
        /* custom error messages */
        configure({
            generateMessage: (ctx) => {
                const msgs = {
                    required: `This field ${ctx.field} is required.`,
                    min: `The field ${ctx.field} is too short.`,
                    max: `The field ${ctx.field} is too long.`, 
                    alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and spaces`,
                    min_value: `The field ${ctx.field} is too low`,
                    max_value: `The field ${ctx.field} is too high`,
                    email: `The field ${ctx.field} must be a valid email`,
                    excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
                    country_excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
                    passwords_mismatch: `The passwords do not match`,
                    tos: `You must agree to the terms of service`

                };

                const message = msgs[ctx.rule.name] ? msgs[ctx.rule.name] : `The field ${ctx.field} is invalid`;
                
                return message;
            },
            validateOnBlur: true, /* tells vue if it should validate a field on blur event */
            validateOnChange: true, /* tells vue if it should validate on change */
            validateOnInput: false, /* tells vue if it should validate on input event */
            validateOnModelUpdate: true /* tells vue if it should validate input whenever the value changes internally through v-model directive */
        })
    }
}