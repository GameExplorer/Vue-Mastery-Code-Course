import { Form as VeeForm, Field as VeeFields, defineRule, ErrorMessage } from 'vee-validate';
import { required } from '@vee-validate/rules';

// Registering the rule globally.

export default {   
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeFields', VeeFields);
        app.component('ErrorMessage', ErrorMessage);

        defineRule('required', required); // Registering the rule globally.
    }
}