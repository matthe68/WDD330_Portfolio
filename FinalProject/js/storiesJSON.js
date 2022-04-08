export let storyJson = [
  {
    storyName: "Welcome",
    storyDescription: "Hey [UsersFirstName], this is your first story about you. This story is a short get to know you about yourself. Come to this tab to see all of your future stories!",
    storyFormat: [
      { attribute: "First Name", storedVariable: "UsersFirstName" },
      { attribute: "Last Name", storedVariable: "UsersLastName" },
      { attribute: "Birthday", storedVariable: "UserBirthday" },
      { attribute: "Birth Place", storedVariable: "UserBirthPlace" }
    ],
    storyStep: [
      {
        "responseNumber": 0,
        "botResponse": "Hello, Welcome to LeafPrint! My name is Milo, I will be helping you construct your personal history profile. As you answer questions I will build your memories under the \"Stories\" tab for you to review later. <br><br>Are you ready to start your first story? (y/n)",
        "expected": [{ "answer": "y", "path": 2 }, { "answer": "n", "path": 1 }],
        "default": "I'm sorry, I didn't get that. Please answer \"y\" or \"n.\""
      },
      {
        "responseNumber": 1,
        "botResponse": "That's ok, If you decide to change your mind you can start again by typing \"BEGIN\" and I will be happy to help you start your first story.",
        "expected": [{ "answer": "BEGIN", "path": 0 }],
        "default": ""
      },
      {
        "responseNumber": 2,
        "botResponse": "Perfect! Going forward, here are some general commands for you to know. \"QUIT\" will allow you to quit a story (be aware, if you quit in the middle of a story all progress in the story will be lost). You may also type \"BEGIN\" to be used after you finish a story to start a new story. If you answer a question with an answer that I cannot recognize I will prompt you again to make sure that you understand what I am expecting from you. <br><br>First, what is your first name?",
        "expected": [{ "answer": "[STRING]", "path": 3 }],
        "default": "I'm sorry, I didn't get that. Please enter your first name.",
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
      },
    ]
  },
  {
    storyName: "Close Family Member",
    storyDescription: "This story is about a family member that you are close to. Happy readings! Check back soon to add pictures, video, or audio files to this story to save your memories forever!",
    storyFormat: [
      { attribute: "Family Member Name", storedVariable: "FamilyMemberName" },
      { attribute: "Relationship", storedVariable: "FamilyMemberRelationship" },
      { attribute: "User Age", storedVariable: "FamilyMemberStoryUserAge" },
      { attribute: "Location", storedVariable: "FamilyMemberStoryPlace" },
      { attribute: "Story", storedVariable: "FamilyMemberStory"}
    ],
    storyStep: [
      {
        "responseNumber": 0,
        "botResponse": "Hey [UsersFirstName], ready to start your next story?? (y/n) <br><br>Remember, you can always view your saved stories under the \"Stories\" tab.",
        "expected": [{ "answer": "y", "path": 2 }, { "answer": "n", "path": 1 }],
        "default": "I'm sorry, I didn't get that. Please answer \"y\" or \"n.\""
      },
      {
        "responseNumber": 1,
        "botResponse": "That's ok, If you decide to change your mind you can start again by typing \"BEGIN\" and I will be happy to help you start your first story.",
        "expected": [{ "answer": "BEGIN", "path": 0 }],
        "default": ""
      },
      {
        "responseNumber": 2,
        "botResponse": "Perfect! Todays story is about a family member that you consider to be close (if you don't want to answer about a family member maybe try a close friend). Think for a minute about who you are close to in your family... <br><br>What is the name of this person?",
        "expected": [{ "answer": "[STRING]", "path": 3 }],
        "default": "I'm sorry, I didn't get that. Please enter the name of the person you are writing about today.",
        "storedVariable": "FamilyMemberName"
      },
      {
        "responseNumber": 3,
        "botResponse": "Great! So this story is about [FamilyMemberName]? (y/n) ",
        "expected": [{ "answer": "y", "path": 4 }, { "answer": "n", "path": 2 }],
        "default": "I'm sorry, I didn't get that. Please confirm that [FamilyMemberName] is the family member you would like to write about using \"y\" for yes or \"n\" for no. If you'd like to enter a different name, type \"n\" and I will ask you to enter their name again."
      },
      {
        "responseNumber": 4,
        "botResponse": "Thank you [UsersFirstName], what is your relationship to [FamilyMemberName]? ",
        "expected": [{ "answer": "[STRING]", "path": 5 }],
        "default": "I'm sorry, I didn't get that.",
        "storedVariable": "FamilyMemberRelationship"
      },
      {
        "responseNumber": 5,
        "botResponse": "Please confirm, your relationship with [FamilyMemberName] is: [FamilyMemberRelationship]? (y/n) ",
        "expected": [{ "answer": "y", "path": 6 }, { "answer": "n", "path": 4 }],
        "default": "I'm sorry, I didn't get that. Please confirm that [FamilyMemberName] is your [FamilyMemberRelationship] using \"y\" for yes or \"n\" for no. If you'd like to enter a different name, type \"n\" and I will ask you to enter your name again."
      },
      {
        "responseNumber": 6,
        "botResponse": "Perfect, lets write about a memory or specific story with [FamilyMemberName]. Think for a minute... <br><br>About how old were you in this story?",
        "expected": [{ "answer": "[Number]", "path": 7 }],
        "default": "I'm sorry, please enter a number to signify your age at the time, its ok to guess. For instance, since I was born on \"3/22/2022\", all of my memories are still within the first year of my life, so I might enter the number 0.1 or I might guess with the number 1.",
        "storedVariable": "FamilyMemberStoryUserAge"
      },
      {
        "responseNumber": 7,
        "botResponse": "Your age was: [FamilyMemberStoryUserAge]? (y/n) ",
        "expected": [{ "answer": "y", "path": 8 }, { "answer": "n", "path": 6 }],
        "default": "I'm sorry, I didn't get that. Please confirm that you were [FamilyMemberStoryUserAge] years old at the time of this story using \"y\" for yes or \"n\" for no. If you'd like to enter a different date, type \"n\" and I will ask you to enter your age again."
      },
      {
        "responseNumber": 8,
        "botResponse": "Where does this story take place?",
        "expected": [{ "answer": "[STRING]", "path": 9 }],
        "default": "I'm sorry, I didn't get that. Please enter where this story took place.",
        "storedVariable": "FamilyMemberStoryPlace"
      },
      {
        "responseNumber": 9,
        "botResponse": "This story took place in [FamilyMemberStoryPlace]? (y/n) ",
        "expected": [{ "answer": "y", "path": 10 }, { "answer": "n", "path": 8 }],
        "default": "I'm sorry, I didn't get that. Please confirm that this story took place in [FamilyMemberStoryPlace] using \"y\" for yes or \"n\" for no. If you'd like to enter a different place, type \"n\" and I will ask you to enter a new place."
      },
      {
        "responseNumber": 10,
        "botResponse": "Perfect! Ok, last prompt. Tell me a story about you and [FamilyMemberName]. Feel free to take up as little or as much space as you'd like, just write something that you want to be remembered.",
        "expected": [{ "answer": "[STRING]", "path": 11 }],
        "default": "I'm sorry, something went wrong. Please try again.",
        "storedVariable": "FamilyMemberStory"
      },
      {
        "responseNumber": 11,
        "botResponse": "Thank you for sharing! See ya next time. <br><br>Coming Soon! Enter pictures, videos, or audio files with your stories to bring them to life",
        "expected": [],
        "default": ""
      }
    ]
  }
]