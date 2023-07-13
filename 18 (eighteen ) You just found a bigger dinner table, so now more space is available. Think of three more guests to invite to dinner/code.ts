let dinnerGuests: string[] = ["Albash ul haq", "Huzaifa ", "awais "];


for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of delightful conversation.`);
}


//dinnerGuests = [...dinnerGuests, "Leonardo da Vinci", "Amelia Earhart", "Mahatma Gandhi"];

console.log("\n=== Additional Invitations ===");
for (const guest of dinnerGuests.slice(3)) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of delightful conversation.`);
}
