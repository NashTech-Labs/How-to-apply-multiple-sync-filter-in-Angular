import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sync Filter';
  seletedStudio: any='All Studio';
  selectedStatus: any='All Status';
  selectedType: any='All Type';
  tableRow:any;
  noReward: boolean=false;
  contributionType: any = [
    'Open source',
    'Conference',
    'Book',
    'Research paper',
    'Meetup',
    'PMO Template',
    'Process Document',
    'Certification',
    'Proposal',
    'Webinar',
    'Online Course',
    'Blog'
  ];
  studioList: any=[
      "Management",
      "Admin & IT",
     "Test Automation Competency",
      "AI/ML Competency",
      "DevOps Competency",
      "Frontend Competency",
      "Agile Competency",
      "Java Competency",
      "Scala Competency"
];
  tableData=[
    {

        "knolderName": "test employee",
        "contributionType": {
            "i": 7,
            "name": "Research paper"
        },
        "title": "testing testing",
        "contributionDate": "2023-05-16 00:00:00",
        "technologyDetails": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "urlDetails": "https://www.lipsum.com/wqs",
        "status": {
            "i": 1,
            "name": "PENDING"
        },
        "studioName": "Agile Competency"
    },
    {

        "knolderName": "test admin",
        "contributionType": {
            "i": 4,
            "name": "Open source"
        },
        "title": "spring-new-spring-new",
        "contributionDate": "2023-05-16 00:00:00",
        "technologyDetails": "spring-new-spring-new\nspring-new-spring-new\nspring-new-spring-new\nspring-new-spring-new\nspring-new-spring-new\nspring-new-spring-new\nspring-new-spring-new\nspring-new-spring-new\nspring-new-spring-new\n",
        "urlDetails": "https://www.ggogldl.com",
        "status": {
            "i": 1,
            "name": "PENDING"
        },
        "studioName": "Scala Competency",

    },
    {
        "knolderName": "test employee",
        "contributionType": {
            "i": 13,
            "name": "Certification"
        },
        "title": "test contribution for reviewer",
        "contributionDate": "2023-05-03 00:00:00",
        "technologyDetails": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "urlDetails": "https://lipsum.com/kupm",
        "status": {
            "i": 0,
            "name": "APPROVED"
        },
        "studioName": "Agile Competency"
    },
    {

        "knolderName": "test ",
        "contributionType": {
            "i": 6,
            "name": "Book"
        },
        "title": "Add Contribution",
        "contributionDate": "2023-05-11 00:00:00",
        "technologyDetails": "Add Contribution\nAdd Contribution\nAdd Contribution\nAdd Contribution\nAdd Contribution\nAdd Contribution\n",
        "urlDetails": "http://localhost:4200/my-profile?id=433",
        "status": {
            "i": 0,
            "name": "APPROVED"
        },
        "studioName": "Scala Competency",

    },
    {
        "knolderName": "Rahul Khowal",
        "contributionType": {
            "i": 4,
            "name": "Open source"
        },
        "title": "testingggggggQAA",
        "contributionDate": "2023-05-10 00:00:00",
        "technologyDetails": "testingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting",
        "urlDetails": "https://www.open.com",
        "status": {
            "i": 0,
            "name": "APPROVED"
        },
        "studioName": "Admin & IT",
    },
    {

        "knolderName": "Kiran Jeet kaur",
        "contributionType": {
            "i": 0,
            "name": "Blog"
        },
        "title": "Queries in Graphql",
        "contributionDate": "2023-05-02 04:46:37",
        "urlDetails": "",
        "status": {
            "i": 0,
            "name": "APPROVED"
        },
        "studioName": "Frontend Competency",
    },
    {
        "knolderName": "Kiran  ",
        "contributionType": {
            "i": 0,
            "name": "Blog"
        },
        "title": "Integrating GraphQL in Angular",
        "contributionDate": "2023-05-02 05:34:41",
        "urlDetails": "",
        "status": {
            "i": 0,
            "name": "APPROVED"
        },
        "studioName": "Frontend Competency",
    },
    {

        "knolderName": " Indukuri",
        "contributionType": {
            "i": 0,
            "name": "Blog"
        },
        "title": "Benchmark your ML projects",
        "contributionDate": "2023-04-11 17:35:14",
        "urlDetails": "",
        "status": {
            "i": 0,
            "name": "APPROVED"
        },
        "studioName": "Management",
    },
    {

        "knolderName": "Piyush ",
        "contributionType": {
            "i": 0,
            "name": "Blog"
        },
        "title": "Deep Down To Change Detection In Angular Part-1",
        "contributionDate": "2023-05-02 03:48:53",
        "urlDetails": "",
        "status": {
            "i": 0,
            "name": "APPROVED"
        },
        "studioName": "Frontend Competency",
    },
    {

        "knolderName": "Gaurav ",
        "contributionType": {
            "i": 0,
            "name": "Blog"
        },
        "title": "Quick insight on Reactive",
        "contributionDate": "2023-04-25 15:16:36",
        "urlDetails": "",
        "status": {
            "i": 0,
            "name": "APPROVED"
        },
        "studioName": "Java Competency",
    }
];


ngOnInit(): void {
   this.tableRow=[... this.tableData]
}

onStudioFilter(value: any){
  this.seletedStudio=value;
  this.onFilterCall();
}

onStatusFilter(value: any){
  this.selectedStatus = value;
  this.onFilterCall();
}

onContritypeFilter(value: any){
  this.selectedType=value;
  this.onFilterCall();
}

onFilterCall(){
if(this.seletedStudio ==='All Studio' && this.selectedStatus === 'All Status' && this.selectedType === 'All Type'){
  this.tableData=[...this.tableRow ];
}
else if(this.selectedStatus !== 'All Status' && this.seletedStudio !== 'All Studio' && this.selectedType === 'All Type'){

  this.tableData = this.tableRow.filter((item: any)=> item?.status.name.toLowerCase() === this.selectedStatus.toLowerCase() &&
 (item?.studioName.toLowerCase() === this.seletedStudio.toLowerCase()));
}
else if(this.selectedStatus !== 'All Status' && this.seletedStudio === 'All Studio' && this.selectedType !== 'All Type'){

  this.tableData = this.tableRow.filter((item: any)=> item?.status.name.toLowerCase() === this.selectedStatus.toLowerCase() &&
 (item?.contributionType.name.toLowerCase() === this.selectedType.toLowerCase()));
}
else if(this.selectedStatus === 'All Status' && this.seletedStudio !== 'All Studio' && this.selectedType !== 'All Type'){

  this.tableData = this.tableRow.filter((item: any)=> item?.studioName.toLowerCase() === this.seletedStudio.toLowerCase() &&
 (item?.contributionType.name.toLowerCase() === this.selectedType.toLowerCase()));
}
else if(this.selectedStatus !== 'All Status' && this.seletedStudio === 'All Studio' && this.selectedType === 'All Type'){

  this.tableData = this.tableRow.filter((item: any)=>item?.status.name.toLowerCase() === this.selectedStatus.toLowerCase());
}
else if(this.selectedStatus === 'All Status' && this.seletedStudio !== 'All Studio' && this.selectedType === 'All Type'){

  this.tableData = this.tableRow.filter((item: any)=>item?.studioName.toLowerCase() === this.seletedStudio.toLowerCase());
}
else if(this.selectedStatus === 'All Status' && this.seletedStudio === 'All Studio' && this.selectedType !== 'All Type'){
  this.tableData = this.tableRow.filter((item: any )=>item?.contributionType.name.toLowerCase() === this.selectedType.toLowerCase());
}
else {
  this.tableData = this.tableRow.filter((item:any)=> item?.studioName.toLowerCase() === this.seletedStudio.toLowerCase() &&
   (item?.contributionType.name.toLowerCase() === this.selectedType.toLowerCase()) &&
   (item?.status.name.toLowerCase() === this.selectedStatus.toLowerCase()));
}
this.noReward = this.tableData.length===0? true :false;
}
}
