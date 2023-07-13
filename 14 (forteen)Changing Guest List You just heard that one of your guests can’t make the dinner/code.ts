const dinnerGuests: string[] = ["Albash ul haq ", "Huzaifa ", "Awais "];


for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of delightful conversation.`);
}


const guestIndexToRemove: number = 1; 
const newInvitee: string = "Saim "; 
dinnerGuests.splice(guestIndexToRemove, 1, newInvitee);


console.log("\n=== Updated Guest List ===");
for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of delightful conversation.`);
}
