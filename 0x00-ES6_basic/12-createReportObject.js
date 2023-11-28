/* eslint-disable */
export default function createReportObject(employeesList) {
  return {allEmployees: {...employeesList},
	  getNumberOfDepartments() {
	    let num = 0;
	    for (let property in this.allEmployees) {
		num++;
	    }
	    return num;
	}
  };
}
