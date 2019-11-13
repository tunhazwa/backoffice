import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';

export class FileNode {
  children: FileNode [];
  filename: string;
  type :any;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  nestedTreeControl :NestedTreeControl <FileNode>;
  nestedDataSource :MatTreeNestedDataSource <FileNode>;
  dataChange: BehaviorSubject< FileNode[]>= new BehaviorSubject<FileNode []> ([]);

  constructor () {
    this.nestedTreeControl= new NestedTreeControl <FileNode> (this._getChildren);
    this.nestedDataSource= new MatTreeNestedDataSource ();
    this.dataChange.subscribe(data => this.nestedDataSource.data=data);
    this.dataChange.next ([
      {
        filename:"configuration",
        type: "",
        children : [
          {
            filename :"Campaign",
            type:"",
            children: [],
          },{
            filename :"Announcement",
            type:"",
            children: [],
          },{
            filename :"Theme",
            type:"",
            children: [],
          },{
            filename :"Greeting Message",
            type:"",
            children: [],
          },{
            filename :"Push/Inbox Notification",
            type:"",
            children: [],
          }, {
            filename :"Bank List",
            type:"",
            children: [],
          }
          
        ],
      },
    ]);
  }
  private _getChildren= (node:FileNode)=> {return observableOf (node.children);};
  hasNestedChild = (_: number, nodeData:FileNode) => {return !(nodeData.type);};
}
  /*cards = [
    { icon: 'recent_actors', title: 'Search Customer', subtitle: 'Search Management', cols: 1, rows: 1 },
    { icon: 'account_circle', title: 'Register NEXT', subtitle: 'Search Management', cols: 1, rows: 1 },
    { icon: 'settings-applications', title: 'Configuration', subtitle: 'Campaign Management', cols: 1, rows: 1 }
  ]

constructor(private breakpointObserver: BreakpointObserver) {}*/

