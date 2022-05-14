let params = new URL(document.location).searchParams;
let take = params.get("take");
let skip = parseInt(params.get("skip"));
const link =
  window.location.origin +
  "/carrier?name=ol&supportEmail=kek&rating=3" +
  "&take=" +
  take +
  "&skip=" +
  skip;

const getCarriers = () => {
  fetch(link)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    })
    .then((json) => {
      json.forEach((item) => {
        fillBookTemplate(item);
      });
    });
};

const fillBookTemplate = async (item) => {
  const template = document.querySelector("#carriers-template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("#carrier-name").innerHTML = item.name;
  clone.querySelector("#supportEmail").innerHTML += item.supportEmail;
  clone.querySelector("#rating").innerHTML += item.rating;
  clone.querySelector("#idshnik").innerHTML += item.id;

  document.querySelector("#template-result").appendChild(clone);

  const next = document.querySelector("#carrier_next");
  next.href = "list_carrier?take=" + take + "&skip=" + (skip + 10);
  if (skip - 10 >= 0) {
    const prev = document.querySelector("#carrier_prev");
    prev.href = "list_carrier?take=" + take + "&skip=" + (skip - 10);
  } else {
    const prev = document.querySelector("#carrier_prev");
    prev.style.display = "none";
  }
};

window.addEventListener("DOMContentLoaded", function () {
  getCarriers();
});
