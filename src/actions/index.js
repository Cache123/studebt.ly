import { getSchoolData } from '../helper/apiCalls/apiCalls';

export const schoolDataSuccess = (schools) => ({
    type: 'SCHOOL_DATA_SUCCESS',
    schools
});

export const fetchSchoolData = () => async (dispatch) => {
    console.log('In the actions');
    const responseObject = await getSchoolData();
    dispatch(schoolDataSuccess(responseObject));
};
