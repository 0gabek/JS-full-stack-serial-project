import classes from "../modules/class";
import form from "../modules/form";
import loader from "../modules/loader";
import modal from "../modules/modal";
import slider from "../modules/slider";
import tab from "../modules/tab";
import timer from "../modules/timer";
import { openModal } from "../modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimer = setTimeout(() => openModal(".modal", modalTimer), 5000);
  classes();
  form("form", modalTimer);
  loader();
  modal("[data-modal]", ".modal", modalTimer);
  slider();
  tab();
  timer();
});
