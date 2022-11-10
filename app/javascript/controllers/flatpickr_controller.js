import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  static targets = [ "end-date" ]

  connect() {
    // require("flatpickr/dist/themes/dark.css");
    // console.log('FlatpickrController#connect')
    const options = {
      mode: "range",
      enableTime: true,
      // altInput: true,
      minDate: "today",
      plugins: [new rangePlugin({ input: "#range_end"})]
    }
    flatpickr(this.element, options)
  }
}
