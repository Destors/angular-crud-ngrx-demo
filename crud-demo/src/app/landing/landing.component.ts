import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface DescNode {
  name: string;
  children?: DescNode[];
}

const TREE_DATA: DescNode[] = [
  {
    name: 'About this project',
    children: [
      {
        name: 'Author',
        children: [{ name: 'Oleksandr Prosolovych (destors - github)' }],
      },
      {
        name: 'Technologies',
        children: [
          { name: '"@angular/core": "^16.0.0"' },
          { name: '"@angular/material": "^16.0.0"' },
          { name: '"rxjs": "~7.8.0"' },
          { name: '"@ngrx/store": "^16.0.0"' },
        ],
      },
      {
        name: 'Practices',
        children: [
          { name: 'NX Enterprise Architecture patterns' },
          { name: 'Module per component' },
          { name: 'Strong TS typing' },
          { name: 'ChangeDetectionStrategy.OnPush' },
          { name: 'Async pipe for retrieving data' },
          { name: 'Enums' },
          { name: 'Facades' },
          { name: 'Directives: *ngFor, *ngIf' },
          { name: 'NGRX feature state' },
        ],
      },
    ],
  },
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.scss'],
})
export class LandingComponent {
  treeControl = new NestedTreeControl<DescNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<DescNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: DescNode) =>
    !!node.children && node.children.length > 0;
}
