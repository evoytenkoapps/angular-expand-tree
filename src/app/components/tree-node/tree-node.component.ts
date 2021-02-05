import { Component, Input, OnInit } from '@angular/core';
import { TREE_DATA } from '../../common/data';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css'],
})
export class TreeNodeComponent implements OnInit {
  @Input() someData: any;
  private data: any;

  constructor() {}

  ngOnInit(): void {
    this.data = TREE_DATA.tree;
    console.log('data', this.data);
  }
}