
function superbowlWin(record){
    return record.result === "W"
};
const year = record.find(superbowlWin).year;
