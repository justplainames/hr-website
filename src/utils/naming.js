export const naming = (str) => {
    var name;

    switch (str) {
        case 'infantcare':
            name = "Infant Care";
            break;
        case 'adoption':
            name = "Adoption";
            break;
        case 'sharedparental':
            name = "Shared Parental";
            break;
        case 'maternity':
            name = "Maternity";
            break;
        case 'childcare':
            name = "Childcare";
            break;
        case 'sickleave':
            name = "Sick Leave";
            break;
        case 'paternity':
            name = "Paternity";
            break;
        default:
            name = "Annual";
            break;
    }

    return name
}