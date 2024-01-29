{
    const tasks = [
        {
            content: "clean the room",
            done: false,
        },
        {
            content: "eat pancakes",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li>
              ${task.content}
            </li> 
            `; 
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
       render();
    };
    
    init();
}