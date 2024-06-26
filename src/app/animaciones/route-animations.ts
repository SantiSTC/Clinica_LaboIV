import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 })),
  ]),
]);

export const slideAnimation = trigger('slideAnimation', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%' })
    ], { optional: true }),
    query(':leave', [
      animate('300ms ease', style({ left: '100%' }))
    ], { optional: true }),
    query(':enter', [
      animate('300ms ease', style({ left: '0%' }))
    ], { optional: true })
  ])
]);
