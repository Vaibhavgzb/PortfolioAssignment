import { animate, state, style, transition, trigger } from "@angular/animations";

export let fadeInOut = trigger(
    'fadeInOut',[
        state('void',style({opacity : 0})),
        transition('void <=> *',animate(500))
    ]
);
