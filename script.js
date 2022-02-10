import Datepicker from "../node_modules/vanillajs-datepicker/js/Datepicker.js";
import Litepicker from "./node_modules/litepicker/dist/js/main";

window.disableLitepickerStyles = true;
new Litepicker({
  element: document.getElementById("foo"),
  singleMode: false,
  position: "bottom",
  format: "DD.MM.YYYY",
});

// console.log(picker);
// elem.append(picker);
