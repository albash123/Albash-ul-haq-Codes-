const dinnerGuests: string[] = ["Albash ul haq ", "Huzaifa Arif", "Awais "];


for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of delightful conversation.`);
}


const guestIndexToReplace: number = 1; 
const newInvitee: string = "saim"; 
dinnerGuests[guestIndexToReplace] = newInvitee;

console.log("\n  Updated Guest List");
for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of delightful conversation.`);
}
