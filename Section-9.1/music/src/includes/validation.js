import { Form as VeeForm, Field as VeeFields, defineRule, ErrorMessage } from 'vee-validate';
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
        defineRule('min', min); 
        defineRule('max', max); 
        defineRule('alpha_spaces', alphaSpaces); 
        defineRule('email', email);
        defineRule('min_value', minValue);
        defineRule('max_value', maxValue);
        defineRule('confirmed', confirmed);
        defineRule('excluded', excluded);
    }
}