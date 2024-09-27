import type { GridStackWidget } from 'gridstack';

export interface IGridStackWidgetExtended extends GridStackWidget {
  componentKey: 'widget' | 'anotherComponent'; // Add other components here
  componentProps?: Record<string, any>;
}