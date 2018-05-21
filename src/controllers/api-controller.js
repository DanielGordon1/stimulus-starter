import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "search" ]

  connect() {
    console.log("apicontroller")
  }

  get query() {
    return this.searchTarget.value
  }

  apiCall() {
    console.log('api-call')
    fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${this.query}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      if (data.found == false) return;
      results.innerText = "";
      data.words.forEach((word) => {
        const item = `<li>${word}</li>`;
        results.insertAdjacentHTML("beforeend", item);
      });
    });
  }


}
