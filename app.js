import generateEncryption, {
  setRotation,
  setRouters,
} from "./module/encryption.js";

const $ = document;

const formDivision = $.querySelector(".form_division");
const form = $.querySelector(".form_division form");
const firstRouterInput = $.querySelector(".form_division #first_router");
const secondRouterInput = $.querySelector(".form_division #second_router");
const thirdRouterInput = $.querySelector(".form_division #third_router");
const firstRotationInput = $.querySelector(".form_division #first_rotation");
const secondRotationInput = $.querySelector(".form_division #second_rotation");
const thirdRotationInput = $.querySelector(".form_division #third_rotation");
const textDivision = $.querySelector(".text");
const plain_text = $.querySelector("#plain_text");
const encryption_text = $.querySelector("#encryption_text");
const change_setting_btn = $.querySelector("#change_setting_btn");
const encryption_submit_btn = $.querySelector("#submit-encryption");

const setRoutersAndRotation = () => {
  setRouters(
    +firstRouterInput.value,
    +secondRouterInput.value,
    +thirdRouterInput.value
  );
  setRotation(
    +firstRotationInput.value,
    +secondRotationInput.value,
    +thirdRotationInput.value
  );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  setRoutersAndRotation();

  formDivision.style = "display:none;";
  textDivision.style = "display:block;";
});

encryption_submit_btn.onclick = () => {
  setRoutersAndRotation();

  try {
    const encryption = generateEncryption(plain_text.value.trim());
    encryption_text.innerHTML = encryption;
  } catch (error) {
    encryption_text.innerHTML = "";
  }
};

change_setting_btn.onclick = () => {
  formDivision.style = "display:block;";
  textDivision.style = "display:none;";
  plain_text.value = "";
  encryption_text.innerHTML = "";
  setRotation(0, 0, 0);
  setRouters(0, 0, 0);
};
