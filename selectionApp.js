library(htmltools)
library(shinyjs)
library(shinyalert)
library(polished)
library(gmailr)
library(here)
library(xtable)
library(htmltools)
library(shiny)
library(shinyWidgets)
library(shinyglide)
library(tidyverse)
library(shinythemes)
library(googlesheets4)
library(googleAuthR)


options(gargle_oob_default = TRUE)

options(googleAuthR.webapp.client_id = "KEYREMOVED")

ui <- fluidPage(theme = shinytheme("darkly"),  useShinyalert(),  # Set up shinyalert,
  glide(disable_type = "hide",
    screen(next_condition = "output.numName == 1",
           googleSignInUI("demo"),
           with(tags, dl( dd(textOutput("g_name")),dd(textOutput("g_email")))),tags$div(class="jumbotron", tags$h2("Module Selection"),tags$p("After you sign in with you Monash account above, you will use this form to enrol in the specific Professional Enhancement Modules for this unit. Please review the module descriptions in Moodle."),textOutput("numName")

    )),
    screen(
      next_condition = "output.num ==6",
     
      tags$div(class="panel panel-primary mb-3", tags$div( class="panel-heading","Make your selection below:"),
               tags$div(class="panel-body",
     
     
      checkboxGroupButtons(
        inputId = "choiceValue", label = "Select:",
        choices = c("Leading from any seat - 2cp","Effective networking - 2cp","Pitching perfectly - 2cp", "Writing professionally - 2cp", "Communicating for impact - 4cp", "Data analytics - 4cp","Applied research design - 4cp", " Media training - 4cp"),
        checkIcon = list(
          yes = tags$i(class = "fa fa-check-square",
                       style = "color: steelblue"),
          no = tags$i(class = "fa fa-square-o",
                      style = "color: steelblue"))
      ,
        justified = FALSE, status = "primary",
      #  individual=TRUE,
     #   direction="horizontal",
    #    width="300",
        size="sm",
        #checkIcon = list(yes = icon("ok", lib = "glyphicon"), no = icon("", lib = "glyphicon"))
     
    direction = "vertical"),
      tags$h3(textOutput("num", inline = TRUE),"points worth of modules have been selected so far.",tags$h3(class="text-danger",textOutput("warningText", inline = TRUE)))))
    ),
    screen(
     
      tags$h2("Your selected modules:"),tags$h4(textOutput("currentSelection")),"You may ",actionButton("submit", "Submit your choice")
      ,"or go back and adjust your selection."
     
    ))
 
)

server <- function(input, output) {
 
 
  output$currentSelection <- renderText({
    paste(input$choiceValue %>%
            str_sub(1),collapse=', ')
   
  })
 
  output$currentText <- renderText({
    choices<-input$choiceValue  %>%
      str_sub(-3,-3) %>%
      as.numeric() %>%
      sum()
    paste0(choices," total cps have been selected so far.")
  })
 
  output$warningText <- renderText({
    choices<-input$choiceValue
    current_choices<-choices %>%
      str_sub(-3,-3) %>%
      as.numeric() %>%
      sum()
    ifelse(
      current_choices < 6, "Select more modules.",ifelse(
        current_choices ==6,'Click Next below.',"You've selected too many modules, please un-select one or more."
      )
    )        
  })
 
 
 
  output$numName <- renderText({
    ifelse(str_detect(sign_ins()$email,"@monash.edu"),1,0)
  })
 
 
  output$num <- renderText({
    choices<-input$choiceValue
    current_choices<-choices %>%
      str_sub(-3,-3) %>%
      as.numeric() %>%
      sum()
  })
 
 
 
  observeEvent(input$submit,{
    ss<-"1JWplBVfIN4Zna3u-LK9RO-eK6YlHzrwPV_NyFcnbS0Q"#1Llf7t444QZmX0fX56VYJHMHBIRwqinl0BUVQbyjVWMY"
   
    my_choices<- data.frame(STID=input$userid,Module=input$choiceValue %>%
                              str_sub(1))
    sheet_append(ss, my_choices,sheet = 1)  })
 
  #    outputOptions(output, "num", suspendWhenHidden = FALSE)
 
 
  #| Message on completition ----

 
 
  observeEvent(input$submit, {
    # Show a modal when the button is pressed
    shinyalert("Thank you for submitting your choices. \n \n The information you have provided us will be updated in Moodle and you will have access to the content relating to your choices in the next 30 mins.", type = "success")
  })  
 
 
  sign_ins <- shiny::callModule(googleSignIn, "demo")
 
  output$g_name = renderText({ sign_ins()$name })
  output$g_email = renderText({ sign_ins()$email })
  output$g_image = renderUI({ img(src=sign_ins()$image) })
 
  observe({
    req(sign_ins()$email)
   
    print("This works")
  })
 

}

# Run the application
shinyApp(ui = ui, server = server)
