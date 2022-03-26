# README file to help with Program Logic

## TextBot Logic

Mention of variables stored as args below is no longer a thing. Each question can store exactly one variable and if more than one thing is input than more than one this will be stored in the variable. This means that as a developer its important to only ask questions that can return 1 answer - for instance: consider asking for the fathers first and last name separately so that there is no confusion. This will also allow for people to input names that are more than one word - "Her first name is Mary Jane" or their last name is "Von Trapp".

  1. Bot checks lh variable "completed-stories" against the stories to see if there are any incomplete stories for the user to start. If there is, the program grabs the next story and procedes.  
  2. Start by sending the user to response 0.
  3. Send botResponse to User
  4. Store response as list of args, each word denoted by a " " will be considered an arg in list named "args".
  5. If response matches one of the responses listed in "object.expected", store any variables as seen in "object.StoredVariables".
    1. Each arg will be stored in order in the order that they are layed out in "object.StoredVariables", 1 arg per variable.
    2. If number of args do not match number of variables then:
      1. if only one variable is listed, each arg in "args" will be concatonated into one variable.
      2. if there is more than one variable and number of args does not match up, use "object.default" and try the question again

    3. If the answer is surrounded by brackets "[]", the logic will check for the specified type (i.e. STRING, looking to match the STRING type)
      1. If the answer matches the type, proceed to "object.expected[i].path".
      2. If the answer does not match the type, use "object.default" and try the question again.

  6. When there is no expected answer or default, the story is over and the bot waits for the user to type "BEGIN" and either procedes to the next unfinished story or returns a default "All stories are currently complete, please try again later to see if LeafPrint has created any new stories for you to fill out. Have a nice day!"
    1. When the story is finished the chatbot will kick off the program "createStory" so that the user can view their story
    2. When the createStory process is finished the program will return that the story is created and save that the story is finished in the "completed-stories" lh variable.
