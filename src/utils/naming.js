export const naming = (str) => {
    var name;

    switch (str) {
        case 'adoption':
            name = "Adoption";
            break;
        case 'annual':
            name = "Annual";
            break;
        case 'childcare':
            name = "Childcare";
            break;
        case 'maternity':
            name = "Maternity";
            break;
        case 'paternity':
            name = "Paternity";
            break;
        case 'sharedparental':
            name = "Shared Parental";
            break;
        case 'sickleave':
            name = "Sickleave";
            break;
        case 'infantcare':
            name = "Infant Care";
    }

    return name
}