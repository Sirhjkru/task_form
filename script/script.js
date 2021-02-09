const buttonSubmit = document.forms.button.submit;
const inputTitle = document.forms.titleForm.title;
const inputSubtitle = document.forms.subtitleForm.subtitle;
const inputObj = document.forms.formObj.obj;
const selectType = document.forms.typeForm.type;
const selectPriority = document.forms.priorityForm.priority;
const selectArchitecture = document.forms.architectureForm.architecture;
const data = {};
const url = "https://127.0.0.1/";

async function response() {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
}

buttonSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  data.title = inputTitle.value;
  data.subtitle = inputSubtitle.value;
  data.object = inputObj.value;
  data.type = selectType.value;
  data.priority = selectPriority.value;
  data.architecture = selectArchitecture.value;
  response();
  console.log(JSON.stringify(data));
});
