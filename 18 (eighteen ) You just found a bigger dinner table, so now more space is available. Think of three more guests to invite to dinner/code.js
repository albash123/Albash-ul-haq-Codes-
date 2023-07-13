var dinnerGuests = ["Albash ul haq", "Huzaifa ", "awais "];
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of delightful conversation."));
}
//dinnerGuests = [...dinnerGuests, "Leonardo da Vinci", "Amelia Earhart", "Mahatma Gandhi"];
console.log("\n=== Additional Invitations ===");
for (var _a = 0, _b = dinnerGuests.slice(3); _a < _b.length; _a++) {
    var guest = _b[_a];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of delightful conversation."));
}
