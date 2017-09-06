
import template from './fCheckboxTemplate.html';

var component = {
  template,
  data() {
    return {
      isError: false
    };
  },
  props: {
    checked: {
      type: Boolean,
      required: true,
      twoWay: true
    },
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isValid() {
      this.isError = (this.required) ? !this.checked : false;
      return !this.isError;
    }
  }
};

export default component;