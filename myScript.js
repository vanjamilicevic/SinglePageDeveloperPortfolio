let design_portfolio = document.getElementById("design-portfolio")
let design_portfolio_hover = document.getElementById("design-portfolio-hover")
let e_learning_page = document.getElementById("e-learning-page")
let e_learning_page_hover = document.getElementById("e-learning-page-hover")
let todo_web_app = document.getElementById("todo-web-app")
let todo_web_app_hover = document.getElementById("todo-web-app-hover")
let entertainment_web_app = document.getElementById("entertainment-web-app")
let entertainment_web_app_hover = document.getElementById("entertainment-web-app-hover")
let memory_game = document.getElementById("memory-game")
let memory_game_hover = document.getElementById("memory-game-hover")
let art_gallery_showcase = document.getElementById("art-gallery-showcase")
let art_gallery_showcase_hover = document.getElementById("art-gallery-showcase-hover")
let view_project_code_mobile = document.getElementsByClassName("view-code-project-mobile")
let input_container_name = document.getElementById("input-container-name")
let input_container_mail = document.getElementById("input-container-email")
let send_message_button = document.getElementById("send-message-button")
let input_name = document.getElementById("input-name")
let input_mail = document.getElementById("input-email")
let invalid_message_name = document.getElementById("invalid-name-message")
let inavlid_name_icon = document.getElementById("invalid-icon-name")
let inavlid_mail_icon = document.getElementById("invalid-mail-icon")
let invalid_mail_message = document.getElementById("invalid-mail-message")

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

send_message_button.addEventListener("click", () => {
    if (input_name.value) {
        input_container_name.classList.add("input-container-valid")
        invalid_message_name.classList.add("none")
        inavlid_name_icon.classList.add("none")
    } else {
        input_container_name.classList.add("input-container-error")
        invalid_message_name.classList.remove("none")
        inavlid_name_icon.classList.remove("none")
    }

    if(input_mail.value && (validateEmail(input_mail.value)))  {
        
        input_container_mail.classList.add("input-container-valid")
        invalid_mail_message.classList.add("none")
        inavlid_mail_icon.classList.add("none")
    } else {
        input_container_mail.classList.add("input-container-error")
        invalid_mail_message.classList.remove("none")
        inavlid_mail_icon.classList.remove("none")
    }
})

Array.prototype.forEach.call(view_project_code_mobile, function(item){
    if(screen.width <= 1200) {
        item.classList.remove("none")
    } else {
        item.classList.add("none")
    }
})

design_portfolio.addEventListener("mouseenter", () => {
    if(screen.width >= 1200) {
        design_portfolio_hover.classList.remove("none")
    }
})

design_portfolio.addEventListener("mouseleave", () => {
    design_portfolio_hover.classList.add("none")
})

e_learning_page.addEventListener("mouseenter", () => {
    if(screen.width >= 1200) {
        e_learning_page_hover.classList.remove("none")
    }
})

e_learning_page.addEventListener("mouseleave", () => {
    e_learning_page_hover.classList.add("none")
})

todo_web_app.addEventListener("mouseenter", () => {
    if(screen.width >= 1200) {
        todo_web_app_hover.classList.remove("none")
    }
})

todo_web_app.addEventListener("mouseleave", () => {
    todo_web_app_hover.classList.add("none")
})

entertainment_web_app.addEventListener("mouseenter", () => {
    if(screen.width >= 1200) {
        entertainment_web_app_hover.classList.remove("none")
    }
})

entertainment_web_app.addEventListener("mouseleave", () => {
    entertainment_web_app_hover.classList.add("none")
})

memory_game.addEventListener("mouseenter", () => {
    if(screen.width >= 1200) {
        memory_game_hover.classList.remove("none")
    }
})

memory_game.addEventListener("mouseleave", () => {
    memory_game_hover.classList.add("none")
})

art_gallery_showcase.addEventListener("mouseenter", () => {
    if(screen.width >= 1200) {
        art_gallery_showcase_hover.classList.remove("none")
    }
})

art_gallery_showcase.addEventListener("mouseleave", () => {
    art_gallery_showcase_hover.classList.add("none")
})

//.input-container-error