import { Component, Input, OnInit } from '@angular/core';
import { TREE_DATA } from '../../common/data';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  private data: any;

  constructor() {}

  ngOnInit(): void {
    this.data = TREE_DATA.tree;
    console.log('data', this.data);
  }
}
