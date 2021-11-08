export const cssname = (type) => {
    var day;
    var color;

    switch (type) {
        case 'meeting':
            day = "meetingDay";
            color = "rgba(74, 153, 255, 0.7)";
            break;
        case 'course':
            day = "courseDay";
            color = "rgba(255, 147, 228, 0.7)";
            break;
        case 'approved':
            day = "leaveDayApproved";
            color = "rgba(136, 255, 186, 0.7)";
            break;
        default:
            day = "leaveDay";
            color = "rgba(156, 136, 255, 0.7)";
            break;

    }

    return [day, color]
}
