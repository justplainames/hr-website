export const appliedqueries = (type) => {

    var day ;
    switch (type) {
        case 'annual':
            day = "applied.annual";
            break;
        case 'birthday':
            day = "applied.birthday";
            break;
        case 'ns':
            day = "applied.ns";
            break;
        case 'infantcare':
            day = "applied.infantcare";
            break;
        case 'adoption':
            day = "applied.adoption";
            break;
        case 'sharedparental':
            day = "applied.sharedparental";
            break;
        case 'hospitalize':
            day = "applied.hospitalize";
            break;
        case 'maternity':
            day = "applied.maternity";
            break;
        case 'compassionate':
            day = "applied.compassionate";
            break;
        case 'unpaid':
            day = "applied.unpaid";
            break;
        case 'timeoff':
            day = "applied.timeoff";
        
    }
    return day
}


export const leftqueries = (type) => {
    var day = '';
    switch (type) {
        case 'annual':
            day = "left.annual";
            break;
        case 'birthday':
            day = "left.birthday";
            break;
        case 'ns':
            day = "left.ns";
            break;
        case 'infantcare':
            day = "left.infantcare";
            break;
        case 'adoption':
            day = "left.adoption";
            break;
        case 'sharedparental':
            day = "left.sharedparental";
            break;
        case 'hospitalize':
            day = "left.hospitalize";
            break;
        case 'maternity':
            day = "left.maternity";
            break;
        case 'compassionate':
            day = "left.compassionate";
            break;
        case 'unpaid':
            day = "left.unpaid";
            break;
        case 'timeoff':
            day = "left.timeoff";
        
    }
    return day
}
