export let storyJson = [
  {
    story: [
      {
        "responseNumber": 0,
        "botResponse": "Hello, Welcome to LeafPrint! My name is Sage, I will be helping you construct your personal history profile. As you answer questions I will add them to your profile. When you finish a story you will be able to find your compiled story under \"Stories.\" Are you ready to start your first story? (y/n)",
        "expected": [{ "answer": "y", "path": 2 }, { "answer": "n", "path": 1 }],
        "default": "I'm sorry, I didn't get that. Please answer \"y\" or \"n.\""
      },
      {
        "responseNumber": 1,
        "botResponse": "That's ok, it doesn't seem that we have any other stories for you to do today. If you decide that you'd like to fill out a story today you can enter \"BEGIN\" and I will be happy to help you start your first story.",
        "expected": [{ "answer": "BEGIN", "path": 0 }],
        "default": ""
      },
      {
        "responseNumber": 2,
        "botResponse": "Perfect! Your first story will help you build your family profile. This information will help me know which stories to prompt you with in the future and help me personalize things for you. If you answer a question with an answer that I cannot recognize I will prompt you again to make sure that you understand what I am expecting from you. First, what is your fathers name (First Last). If you do not know your fathers name please enter \"SKIP\" and I will move on without this information.",
        "expected": [{ "answer": "[STRING]", "path": 3 }],
        "default": "I'm sorry, I didn't get that. Please make sure you answer your Fathers name in the format (FirstName LastName), example: \"Darth Vader,\" If you do not know the answer or would rather not answer, please answer \"SKIP.\"",
        "storedVariables": [{ "variableName": "FathersFirstName" }, { "variableName": "FathersLastName" }]
      },
      {
        "responseNumber": 3,
        "botResponse": "Please confirm, your fathers first name is: [FathersFirstName], and your fathers last name is: [FathersLastName]? (y/n) ",
        "expected": [{ "answer": "y", "path": 4 }, { "answer": "n", "path": 2 }],
        "default": "I'm sorry, I didn't get that. Please make sure you answer your Fathers name in the format (FirstName LastName), example: \"Darth Vader,\" If you do not know the answer or would rather not answer, please answer \"SKIP.\""
      },
      ,
      {
        "responseNumber": 4,
        "botResponse": "Yay! You completed your first story! See ya next time",
        "expected": [],
        "default": ""
      }
    ]
  }
]