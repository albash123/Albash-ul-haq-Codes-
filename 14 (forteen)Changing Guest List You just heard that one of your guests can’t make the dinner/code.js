var dinnerGuests = ["Albash ul haq ", "Huzaifa ", "Awais "];
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of delightful conversation."));
}
var guestIndexToRemove = 1;
var newInvitee = "Marie Curie";
dinnerGuests.splice(guestIndexToRemove, 1, newInvitee);
console.log("\n=== Updated Guest List ===");
for (var _a = 0, dinnerGuests_2 = dinnerGuests; _a < dinnerGuests_2.length; _a++) {
    var guest = dinnerGuests_2[_a];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of delightful conversation."));
}
