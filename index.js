let records ={
  "Records": [
    {
      "messageId": "059f36b4-87a3-44ab-83d2-661975830a7d",
      "body": "{\"data\": \"1:bob:1621273543000\"}",
      "eventSource": "aws:sqs",
      "messageAttributes": {
        "fooEnabled": {
          "DataType": "String",
          "StringValue": "true"
        }
      }
    },
    {
      "messageId": "2e1424d4-f796-459a-8184-9c92662be6da",
      "body": "{\"data\": \"2:bill:1621273581000\"}",
      "eventSource": "aws:sqs",
      "messageAttributes": {
        "fooEnabled": {
          "DataType": "String",
          "StringValue": "false"
        }
      }
    },
    {
      "messageId": "0f9584x4-x953-324m-9530-8x32662ff6pq",
      "body": "{\"data\": \"3:tom:1621274160000\"}",
      "eventSource": "aws:sqs",
      "messageAttributes": {
        "fooEnabled": {
          "DataType": "String",
          "StringValue": "false"
        }
      }
    },
    {
      "messageId": "4f156434-f896-853b-9485-4c92043cd6xx",
      "body": "{\"data\": \"4:steve:1621274325000\"}",
      "eventSource": "aws:sqs",
      "messageAttributes": {
        "fooEnabled": {
          "DataType": "String",
          "StringValue": "true"
        }
      }
    }
  ]
}

const filterTrueFunction = (json) => {
  let filter = json.Records.filter(record => record.messageAttributes.fooEnabled.StringValue === 'true')
  printTimes(filter)
}

const printTimes = (filterArr) => {
  let times = []
  filterArr.map(i => times.push(i.body))
  console.log()
}

filterTrueFunction(records)