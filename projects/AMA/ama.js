const happyArr = [
  "I never noticed before but you're quite gifted.",
  "You inspire me.",
  "When my daughter grows up, I want her to be like you.",
  "Real friends are hard to come by. I’m glad you’re one of them.",
  "I always feel so loved and appreciated by you, and it honestly means so much.",
  "You made my day!",
  "You have beautiful hair & it looks super soft!",
  "Your heart for people has been a huge encouragement for me.",
  "That last photo you took — you looked good in it!",
  "Your hard work says a lot about your character and I’m really proud of you.",
  "I don’t think people tell you enough but you’re super caring and thoughtful.",
  "I don’t know why you think you don’t look nice today, you look nice all the time.",
  "You’re really funny and I love that you make me laugh.",
  "You’re way too nice!",
  "You’re one of the most sincere people I’ve ever met.",
  "You’re smarter than you think you are.",
  "You have nice brows.",
  "You have a beautiful curly mane.",
  "You’re doing a great job. Thank you.",
  "I like your glasses.",
  "You have this aura that just makes the people around you comfortable. I wish I could be more like that.",
  "You’re really good at talking.",
  "You’re a different kind of pretty.",
  "I really like [that thing you drew].",
  "I really like how nice your hair looks today!",
  "You are the most genuine “good” person I know.",
  "I really admire your passion in whatever you do.",
  "I like your pants.",
  "You're a nice person to be quiet with.",
  "I love your handwriting! It looks like it belongs in a comic book.",
  "You better not die first, life would be boring without you.",
  "I wish I could be like you. You don't seem to care what other people think and you can just be yourself. I want to be like that someday.",
  "You're a good person. A genuinely good person, and I'm proud of you, whoever you need to be.",
  "I like how you always make sure no one is feeling left out.",
  "I know you are with me because of what I am, but you did not make me feel like that at all. You actually seemed to enjoy me and our day together. I am really happy someone can just accept what I am and not constantly talk about how they accept me.",
  "Sometimes It's okay not to be okay. You are going somewhere, you are going forward."
];

const noticedArr = [
  "People notice you. You leave an impact.",
  "I never noticed before but you're quite gifted.",
  "I always feel so loved and appreciated by you, and it honestly means so much.",
  "I really like your style. It feels different from everyone else.",
  "You match your major very well.",
  "That last photo you took — you looked good in it!",
  "Your hard work says a lot about your character and I’m really proud of you.",
  "I don’t think people tell you enough but you’re super caring and thoughtful.",
  "Maybe people and the school recognize you for the person you are and that you’re really nice to everyone rather than worrying about your mediocre grades.",
  "I don’t know why you think you don’t look nice today, you look nice all the time.",
  "I like the way you talk. It always sounds like you’re telling a story.",
  "You’re smarter than you think you are.",
  "You have nice brows.",
  "You’re doing a great job. Thank you.",
  "I like your glasses.",
  "You have this aura that just makes the people around you comfortable. I wish I could be more like that.",
  "You’re really good at talking.",
  "You’re a different kind of pretty.",
  "I really like [that thing you drew].",
  "I really like how nice your hair looks today!",
  "I really admire your passion in whatever you do.",
  "I like your pants.",
  "You are so on top of your shit. Like, when shit needs to get done, you get that shit done.",
  "I love your handwriting! It looks like it belongs in a comic book.",
  "I wish I could be like you. You don't seem to care what other people think and you can just be yourself. I want to be like that someday.",
  "You have an excellent grasp on the human experience, especially because you don't see yourself as being outside of it.",
  "I like how you always make sure no one is feeling left out."
];

const confidentArr = [
  "You’re always so confident in your opinions.",
  "You inspire me.",
  "You are the most hard-working person I've ever met.",
  "You are one of the most courageous people I have ever met.",
  "You'll be an influential leader in the future.",
  "I really like your style. It feels different from everyone else.",
  "That last photo you took — you looked good in it!",
  "Your hard work says a lot about your character and I’m really proud of you.",
  "Maybe people and the school recognize you for the person you are and that you’re really nice to everyone rather than worrying about your mediocre grades.",
  "I don’t know why you think you don’t look nice today, you look nice all the time.",
  "You’re really funny and I love that you make me laugh.",
  "I like the way you talk. It always sounds like you’re telling a story.",
  "You’re smarter than you think you are.",
  "You’re doing a great job. Thank you.",
  "You have this aura that just makes the people around you comfortable. I wish I could be more like that.",
  "You’re really good at talking.",
  "I really admire your passion in whatever you do.",
  "You are so on top of your shit. Like, when shit needs to get done, you get that shit done.",
  "I wish I could be like you. You don't seem to care what other people think and you can just be yourself. I want to be like that someday.",
  "You’re built like a fighter.",
  "You have an excellent grasp on the human experience, especially because you don't see yourself as being outside of it."
];

const lovedArr = [
  "She's genuine.",
  "People notice you. You leave an impact.",
  "When my daughter grows up, I want her to be like you.",
  "Real friends are hard to come by. I’m glad you’re one of them.",
  "I always feel so loved and appreciated by you, and it honestly means so much.",
  "You made my day!",
  "You have beautiful hair & it looks super soft!",
  "I really like your style. It feels different from everyone else.",
  "You match your major very well.",
  "Your heart for people has been a huge encouragement for me.",
  "That last photo you took — you looked good in it!",
  "Your hard work says a lot about your character and I’m really proud of you.",
  "I don’t think people tell you enough but you’re super caring and thoughtful.",
  "I don’t know why you think you don’t look nice today, you look nice all the time.",
  "You’re really funny and I love that you make me laugh.",
  "You’re one of the most sincere people I’ve ever met.",
  "You’re doing a great job. Thank you.",
  "You have this aura that just makes the people around you comfortable. I wish I could be more like that.",
  "You’re a different kind of pretty.",
  "You are the most genuine “good” person I know.",
  "I really admire your passion in whatever you do.",
  "You make me want to be a better person, like you.",
  "You're a nice person to be quiet with.",
  "You better not die first, life would be boring without you.",
  "I wish I could be like you. You don't seem to care what other people think and you can just be yourself. I want to be like that someday.",
  "You're a good person. A genuinely good person, and I'm proud of you, whoever you need to be.",
  "Sometimes It's okay not to be okay. You are going somewhere, you are going forward."
];

const allArr = [
"She's genuine.",
"You’re always so confident in your opinions.",
"People notice you. You leave an impact.",
"I never noticed before but you're quite gifted.",
"You inspire me.",
"When my daughter grows up, I want her to be like you.",
"Real friends are hard to come by. I’m glad you’re one of them.",
"You are the most hard-working person I've ever met.",
"I always feel so loved and appreciated by you, and it honestly means so much.",
"You made my day!",
"You are one of the most courageous people I have ever met.",
"You'll be an influential leader in the future.",
"You have beautiful hair & it looks super soft!",
"I really like your style. It feels different from everyone else.",
"You match your major very well.",
"Your heart for people has been a huge encouragement for me.",
"That last photo you took — you looked good in it!",
"Your hard work says a lot about your character and I’m really proud of you.",
"I don’t think people tell you enough but you’re super caring and thoughtful.",
"Maybe people and the school recognize you for the person you are and that you’re really nice to everyone rather than worrying about your mediocre grades.",
"I don’t know why you think you don’t look nice today, you look nice all the time.",
"You’re really funny and I love that you make me laugh.",
"I like the way you talk. It always sounds like you’re telling a story.",
"You’re way too nice!",
"You’re one of the most sincere people I’ve ever met.",
"You’re smarter than you think you are.",
"You have nice brows.",
"You have a beautiful curly mane.",
"You’re doing a great job. Thank you.",
"I like your glasses.",
"You have this aura that just makes the people around you comfortable. I wish I could be more like that.",
"You’re really good at talking.",
"You’re a different kind of pretty.",
"I really like [that thing you drew].",
"I really like how nice your hair looks today!",
"You are the most genuine “good” person I know.",
"I really admire your passion in whatever you do.",
"I like your pants.",
"You are so on top of your shit. Like, when shit needs to get done, you get that shit done.",
"You make me want to be a better person, like you.",
"You're a nice person to be quiet with.",
"I love your handwriting! It looks like it belongs in a comic book.",
"You better not die first, life would be boring without you.",
"I wish I could be like you. You don't seem to care what other people think and you can just be yourself. I want to be like that someday.",
"You’re built like a fighter.",
"You have an excellent grasp on the human experience, especially because you don't see yourself as being outside of it.",
"You're a good person. A genuinely good person, and I'm proud of you, whoever you need to be.",
"I like how you always make sure no one is feeling left out.",
"I know you are with me because of what I am, but you did not make me feel like that at all. You actually seemed to enjoy me and our day together. I am really happy someone can just accept what I am and not constantly talk about how they accept me.",
"Sometimes It's okay not to be okay. You are going somewhere, you are going forward."

];

document.getElementById("happy").addEventListener("click", happy);
document.getElementById("noticed").addEventListener("click", noticed);
document.getElementById("confident").addEventListener("click", confident);
document.getElementById("loved").addEventListener("click", loved);
document.getElementById("totallyRandom").addEventListener("click", function(event){
  event.preventDefault();
  mood = "________________.";
  document.getElementById("mood").style.textDecoration = "none";
  randomize(allArr);
});

mood="";
function happy(){
  mood="happy.";
  document.getElementById("mood").style.textDecoration = "underline";
  randomize(happyArr);
}
function noticed(){
  mood="noticed.";
  document.getElementById("mood").style.textDecoration = "underline";
  randomize(noticedArr);
}
function confident(){
  mood="confident.";
  document.getElementById("mood").style.textDecoration = "underline";
  randomize(confidentArr);
}
function loved(){
  mood = "loved.";
  document.getElementById("mood").style.textDecoration = "underline";
  randomize(lovedArr);
}


function randomize(array){
  const index = Math.floor(Math.random() * array.length);
  const randomText = array[index];

  document.getElementById("mood").textContent = mood;

  document.getElementById("quote").textContent = randomText;
}
