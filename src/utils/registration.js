import web3 from './web3';
 const contractAddress ="0x6A4f0115F960b49ed224ce974E4061fd801E3Ca7"

 const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "newStudent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "studentId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "highschoolName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "universityFaculty",
				"type": "string"
			}
		],
		"name": "addStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStudents",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "count",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "studentId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "highschoolName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "universityFaculty",
						"type": "string"
					}
				],
				"internalType": "struct RegistrationFormat.Student[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "students",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "studentId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "highschoolName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "universityFaculty",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
 export default new web3.eth.Contract(abi, contractAddress);