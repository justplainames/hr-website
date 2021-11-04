export const cssname = (type) => {
    var day;

    switch (type) {
        case 'annual':
            day = "leaveDay";
            break;
        case 'meeting':
            day = "meetingDay";
            break;
        case 'course':
            day = "courseDay";
            break;

    }

    return day

}
