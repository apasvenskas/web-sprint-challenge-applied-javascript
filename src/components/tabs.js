import axios from "axios";


const Tabs = (topics) => {
  const topics1 = document.createElement('div');
  topics1.classList.add('topics');

  topics.forEach(element => {
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('topics');
    tabDiv.textContent = element;
    topics1.appendChild(tabDiv); 
  });

  return topics1;
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  const section = document.querySelector(selector);
  axios.get(`http://localhost:5001/api/topics`).then((res) => {
    const articles = res.data.topics;
    const tabs = Tabs(articles);
    section.appendChild(tabs);
  })

  
    /*axios.get(`http://localhost:5001/api/topics`).then((res) => {
      const topics = res.data.topics;
      const tabs = new Tabs(selector, topics);
      tabs.render();
    })
    .catch(error => {
      console.log(error);
    });*/
  

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
