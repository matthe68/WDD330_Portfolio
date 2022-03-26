export let storyJson = [
  {
    storyName: "Welcome",
    storyStep: [
      {
        "responseNumber": 0,
        "botResponse": "Hello, Welcome to LeafPrint! My name is Milo, I will be helping you construct your personal history profile. As you answer questions I will build your memories under the \"Stories\" tab for you to review later. <br><br>Are you ready to start your first story? (y/n)",
        "expected": [{ "answer": "y", "path": 2 }, { "answer": "n", "path": 1 }],
        "default": "I'm sorry, I didn't get that. Please answer \"y\" or \"n.\""
      },
      {
        "responseNumber": 1,
        "botResponse": "That's ok, it doesn't seem that I have any other stories for you to do today. If you decide that you'd like to fill out a story today you can enter \"BEGIN\" and I will be happy to help you start your first story.",
        "expected": [{ "answer": "BEGIN", "path": 0 }],
        "default": ""
      },
      {
        "responseNumber": 2,
        "botResponse": "Perfect! Going forward, here are some general commands for you to know. \"QUIT\" will allow you to quit a story (be aware, if you quit in the middle of a story all progress in the story will be lost). You may also type \"BEGIN\" to be used after you finish a story to start a new story. If you answer a question with an answer that I cannot recognize I will prompt you again to make sure that you understand what I am expecting from you. <br><br>First, what is your first name?",
        "expected": [{ "answer": "[STRING]", "path": 3 }],
        "default": "I'm sorry, I didn't get that. Please enter your first name. If you don't want to provide this information, please answer, please answer \"SKIP.\"",
        "storedVariable": "UsersFirstName"
      },
      {
        "responseNumber": 3,
        "botResponse": "Please confirm, your first name is: [UsersFirstName]? (y/n) ",
        "expected": [{ "answer": "y", "path": 4 }, { "answer": "n", "path": 2 }],
        "default": "I'm sorry, I didn't get that. Please confirm that [UsersFirstName] is your first name using \"y\" for yes or \"n\" for no. If you'd like to enter a different name, type \"n\" and I will ask you to enter your name again."
      },
      {
        "responseNumber": 4,
        "botResponse": "Thank you [UsersFirstName], what is your last name? ",
        "expected": [{ "answer": "[STRING]", "path": 5 }],
        "default": "I'm sorry, I didn't get that. Please enter your last name. If you'd like to enter a different name, type \"no\" and I will ask you to enter your last name again.",
        "storedVariable": "UsersLastName"
      },
      {
        "responseNumber": 5,
        "botResponse": "Please confirm, your last name is: [UsersLastName]? (y/n) ",
        "expected": [{ "answer": "y", "path": 6 }, { "answer": "n", "path": 4 }],
        "default": "I'm sorry, I didn't get that. Please confirm that [UsersLastName] is your first name using \"y\" for yes or \"n\" for no. If you'd like to enter a different name, type \"n\" and I will ask you to enter your name again."
      },
      {
        "responseNumber": 6,
        "botResponse": "Thank you [UsersFirstName], What is your birthday? (Enter in the form mm/dd/yyyy)",
        "expected": [{ "answer": "[DATE]", "path": 7 }],
        "default": "I'm sorry, please enter a valid date using the form mm/dd/yyyy. For example, I was born March 23, 2022 so I would enter \"3/22/2022\"). ",
        "storedVariable": "UserBirthday"
      },
      {
        "responseNumber": 7,
        "botResponse": "Your birthday is: [UserBirthday]? (y/n) ",
        "expected": [{ "answer": "y", "path": 8 }, { "answer": "n", "path": 6 }],
        "default": "I'm sorry, I didn't get that. Please confirm that [UserBirthday] is your first birthday using \"y\" for yes or \"n\" for no. If you'd like to enter a different date, type \"n\" and I will ask you to enter your birthday again."
      },
      {
        "responseNumber": 8,
        "botResponse": "Almost done, last question! Where were you born?",
        "expected": [{ "answer": "[STRING]", "path": 9 }],
        "default": "I'm sorry, please enter a valid date using the form mm/dd/yyyy to enter a date. For example, I was born March 23, 2022 so I would enter \"3/22/2022\"). ",
        "storedVariable": "UserBirthPlace"
      },
      {
        "responseNumber": 9,
        "botResponse": "You were born in [UserBirthPlace]? (y/n) ",
        "expected": [{ "answer": "y", "path": 10 }, { "answer": "n", "path": 8 }],
        "default": "I'm sorry, I didn't get that. Please confirm that you were born in [UserBirthPlace] using \"y\" for yes or \"n\" for no. If you'd like to enter a different place, type \"n\" and I will ask you to enter your birthplace again."
      },
      {
        "responseNumber": 10,
        "botResponse": "Yay! You completed your first story! See ya next time. <br><br>Coming Soon! Enter pictures, videos, or audio files with your stories to bring them to life",
        "expected": [],
        "default": ""
      }
    ]
  }
]