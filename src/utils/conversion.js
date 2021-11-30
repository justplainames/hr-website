export const stringconversion = (type) => {

    var day;
    switch (type) {
        case 'Adoption Leave':
            day = "adoption";
            break;
        case 'Annual Leave':
            day = "annual";
            break;
        case 'Childcare Leave':
            day = "childcare";
            break;
        case 'Maternity Leave':
            day = "maternity";
            break;
        case 'Paternity Leave':
            day = "paternity";
            break;
        case 'Shared Parental Leave':
            day = "sharedparental";
            break;
        case 'Sick Leave':
            day = "sickleave";
            break;
        case 'Unpaid Infant Care Parental':
            day = "infantcare";
    }
    return day
}

export const stringconversionCaps = (type) => {

    var day;
    switch (type) {
        case 'adoption':
            day = "Adoption";
            break;
        case 'annual':
            day = "Annual";
            break;
        case 'childcare':
            day = "Childcare";
            break;
        case 'maternity':

            day = "Maternity";
            break;
        case 'paternity':

            day = "Paternity";
            break;
        case 'sharedparental':

            day = "Shared Parental";
            break;
        case 'sickleave':

            day = "Sick";
            break;
        case 'infantcare':

            day = "Unpaid Infant Care Parental";
    }
    return day
}

export const stringconversionrevert = (type) => {
    var day;
    switch (type) {
        case 'adoption':
            day = "Adoption Leave";
            break;
        case 'annual':
            day = "Annual Leave";
            break;
        case 'childcare':
            day = "Childcare Leave";
            break;
        case 'maternity':

            day = "Maternity Leave";
            break;
        case 'paternity':

            day = "Paternity Leave";
            break;
        case 'sharedparental':

            day = "Shared Parental Leave";
            break;
        case 'sickleave':

            day = "Sick Leave";
            break;
        case 'infantcare':

            day = "Unpaid Infant Care Parental";
    }
    return day
}