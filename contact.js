/**
 * Validates a phone number.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} - True if the phone number is valid, false otherwise.
 */
function validatePhoneNumber(phoneNumber) {
    const regex = /^\+(?:[0-9]){1,3}(?:[ -]?[0-9]){6,14}$/;
    return regex.test(phoneNumber);
}

const stateAreaCodes = {
    'CA': ['213', '310', '323', '408', '415'],
    'NY': ['212', '315', '516', '518', '607'],
    'TX': ['210', '214', '281', '512', '713'],
    'FL': ['305', '321', '352', '386', '407'],
    'IL': ['217', '224', '309', '312', '618']
};
stateAreaCodes['GA'] = ['404', '470', '478', '678', '770'];
stateAreaCodes['WA'] = ['206', '253', '360', '425', '509'];
stateAreaCodes['MA'] = ['339', '351', '413', '508', '617'];
stateAreaCodes['MI'] = ['231', '248', '269', '313', '517'];
stateAreaCodes['OH'] = ['216', '330', '419', '440', '513'];
stateAreaCodes['PA'] = ['215', '267', '412', '484', '570'];
stateAreaCodes['NC'] = ['252', '336', '704', '828', '919'];
stateAreaCodes['NJ'] = ['201', '551', '609', '732', '856'];
stateAreaCodes['VA'] = ['276', '434', '540', '703', '757'];
stateAreaCodes['AZ'] = ['480', '520', '602', '623', '928'];
stateAreaCodes['IN'] = ['219', '260', '317', '574', '765'];
stateAreaCodes['TN'] = ['423', '615', '731', '865', '901'];
stateAreaCodes['MO'] = ['314', '417', '573', '636', '816'];
stateAreaCodes['MD'] = ['240', '301', '410', '443', '667'];
stateAreaCodes['WI'] = ['262', '414', '608', '715', '920'];
stateAreaCodes['MN'] = ['218', '320', '507', '612', '651'];
stateAreaCodes['CO'] = ['303', '719', '720', '970'];
stateAreaCodes['AL'] = ['205', '251', '256', '334', '938'];
stateAreaCodes['SC'] = ['803', '843', '864'];
stateAreaCodes['LA'] = ['225', '318', '337', '504', '985'];
stateAreaCodes['KY'] = ['270', '364', '502', '606', '859'];
stateAreaCodes['OR'] = ['458', '503', '541', '971'];
stateAreaCodes['OK'] = ['405', '539', '580', '918'];
stateAreaCodes['CT'] = ['203', '475', '860', '959'];
stateAreaCodes['IA'] = ['319', '515', '563', '641', '712'];