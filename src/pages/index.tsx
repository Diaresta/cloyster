import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { useEffect, useState } from 'react';

let movez = [
  {
    name: 'absorb',
    type: 'grass',
    category: 'special',
    power: 20,
    accuracy: 1,
    pp: 20,
  },
  {
    name: 'acid',
    type: 'poison',
    category: 'physical',
    power: 40,
    accuracy: 1,
    pp: 30,
    effect: "10% chance to lower user's defense by 1.",
  },
  {
    name: 'acid armor',
    type: 'poison',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 40,
    effect: {
      stat: 'defense',
      stages: 2,
    },
  },
  {
    name: 'agility',
    type: 'psychic',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 30,
    effect: {
      stat: 'speed',
      stages: 2,
    },
  },
  {
    name: 'amnesia',
    type: 'psychic',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 20,
    effect: {
      stat: 'special',
      stages: 2,
    },
  },
  {
    name: 'aurora beam',
    type: 'ice',
    category: 'special',
    power: 65,
    accuracy: 1,
    pp: 20,
    effect: "10% chance to lower user's attack by 1.",
  },
  {
    name: 'barrage',
    type: 'normal',
    category: 'physical',
    power: 15,
    accuracy: 0.85,
    pp: 20,
  },
  {
    name: 'barrier',
    type: 'psychic',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 30,
    effect: {
      stat: 'defense',
      stages: 2,
    },
  },
  {
    name: 'bide',
    type: 'normal',
    category: 'physical',
    power: null,
    accuracy: null,
    pp: 10,
  },
  {
    name: 'bind',
    type: 'normal',
    category: 'physical',
    power: 15,
    accuracy: 0.85,
    pp: 20,
  },
  {
    name: 'bite',
    type: 'normal',
    category: 'physical',
    power: 60,
    accuracy: 1,
    pp: 25,
    effect: ['30% chance to flinch the target.'],
  },
  {
    name: 'blizzard',
    type: 'ice',
    category: 'special',
    power: 120,
    accuracy: 0.9,
    pp: 5,
    effect: ['10% chance to freeze the target.'],
  },
  {
    name: 'body slam',
    type: 'normal',
    category: 'physical',
    power: 85,
    accuracy: 1,
    pp: 15,
    effect: ['30% chance to paralyze the target.'],
  },
  {
    name: 'bone club',
    type: 'ground',
    category: 'physical',
    power: 65,
    accuracy: 0.85,
    pp: 20,
    effect: ['30% chance to flinch the target.'],
  },
  {
    name: 'bonemerang',
    type: 'ground',
    category: 'physical',
    power: 50,
    accuracy: 0.9,
    pp: 10,
  },
  {
    name: 'bubble',
    type: 'water',
    category: 'special',
    power: 20,
    accuracy: 1,
    pp: 30,
    effect: "10% chance to lower user's speed by 1.",
  },
  {
    name: 'bubble beam',
    type: 'water',
    category: 'special',
    power: 65,
    accuracy: 1,
    pp: 20,
    effect: "10% chance to lower user's speed by 1.",
  },
  {
    name: 'clamp',
    type: 'water',
    category: 'physical',
    power: 35,
    accuracy: 0.85,
    pp: 10,
  },
  {
    name: 'comet punch',
    type: 'normal',
    category: 'physical',
    power: 18,
    accuracy: 0.85,
    pp: 15,
  },
  {
    name: 'confuse ray',
    type: 'ghost',
    category: 'status',
    power: null,
    accuracy: 1,
    pp: 10,
    effect: ['Confuses the target.'],
  },
  {
    name: 'confusion',
    type: 'psychic',
    category: 'special',
    power: 50,
    accuracy: 1,
    pp: 25,
    effect: ['10% chance to confuse the target.'],
  },
  {
    name: 'constrict',
    type: 'normal',
    category: 'physical',
    power: 10,
    accuracy: 1,
    pp: 35,
    effect: "10% chance to lower user's speed by 1.",
  },
  {
    name: 'conversion',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 30,
  },
  {
    name: 'counter',
    type: 'fighting',
    category: 'physical',
    power: null,
    accuracy: 1,
    pp: 20,
    priority: -1,
  },
  {
    name: 'crabhammer',
    type: 'water',
    category: 'physical',
    power: 90,
    accuracy: 0.85,
    pp: 10,
    highCriticalHitRatio: true,
  },
  {
    name: 'cut',
    type: 'normal',
    category: 'physical',
    power: 50,
    accuracy: 0.95,
    pp: 30,
  },
  {
    name: 'defense curl',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 40,
    effect: {
      stat: 'defense',
      stages: 1,
    },
  },
  {
    name: 'dig',
    type: 'ground',
    category: 'physical',
    power: 60,
    accuracy: 1,
    pp: 10,
  },
  {
    name: 'disable',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 0.55,
    pp: 20,
  },
  {
    name: 'dizzy punch',
    type: 'normal',
    category: 'physical',
    power: 70,
    accuracy: 1,
    pp: 10,
  },
  {
    name: 'double kick',
    type: 'fighting',
    category: 'physical',
    power: 30,
    accuracy: 1,
    pp: 30,
  },
  {
    name: 'double slap',
    type: 'normal',
    category: 'physical',
    power: 15,
    accuracy: 0.85,
    pp: 10,
  },
  {
    name: 'double team',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 15,
    effect: {
      stat: 'evasiveness',
      stages: 1,
    },
  },
  {
    name: 'double-edge',
    type: 'normal',
    category: 'physical',
    power: 100,
    accuracy: 1,
    pp: 15,
  },
  {
    name: 'dragon rage',
    type: 'dragon',
    category: 'special',
    power: null,
    accuracy: 1,
    pp: 10,
  },
  {
    name: 'dream eater',
    type: 'psychic',
    category: 'special',
    power: 100,
    accuracy: 1,
    pp: 15,
  },
  {
    name: 'drill peck',
    type: 'flying',
    category: 'physical',
    power: 80,
    accuracy: 1,
    pp: 20,
  },
  {
    name: 'earthquake',
    type: 'ground',
    category: 'physical',
    power: 100,
    accuracy: 1,
    pp: 10,
  },
  {
    name: 'egg bomb',
    type: 'normal',
    category: 'physical',
    power: 100,
    accuracy: 0.75,
    pp: 10,
  },
  {
    name: 'ember',
    type: 'fire',
    category: 'special',
    power: 40,
    accuracy: 1,
    pp: 25,
    effect: ['10% chance to burn the target.'],
  },
  {
    name: 'explosion',
    type: 'normal',
    category: 'physical',
    power: 170,
    accuracy: 1,
    pp: 5,
  },
  {
    name: 'fire blast',
    type: 'fire',
    category: 'special',
    power: 120,
    accuracy: 0.85,
    pp: 5,
    effect: ['10% chance to burn the target.'],
  },
  {
    name: 'fire punch',
    type: 'fire',
    category: 'physical',
    power: 75,
    accuracy: 1,
    pp: 15,
    effect: ['10% chance to burn the target.'],
  },
  {
    name: 'fire spin',
    type: 'fire',
    category: 'special',
    power: 35,
    accuracy: 0.85,
    pp: 15,
  },
  {
    name: 'fissure',
    type: 'ground',
    category: 'physical',
    power: null,
    accuracy: null,
    pp: 5,
  },
  {
    name: 'flamethrower',
    type: 'fire',
    category: 'special',
    power: 95,
    accuracy: 1,
    pp: 15,
    effect: ['10% chance to burn the target.'],
  },
  {
    name: 'flash',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 0.7,
    pp: 20,
    effect: {
      stat: 'accuracy',
      stages: -1,
    },
  },
  {
    name: 'fly',
    type: 'flying',
    category: 'physical',
    power: 70,
    accuracy: 0.95,
    pp: 15,
  },
  {
    name: 'focus energy',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 30,
    highCriticalHitRatio: true,
  },
  {
    name: 'fury attack',
    type: 'normal',
    category: 'physical',
    power: 15,
    accuracy: 0.85,
    pp: 20,
  },
  {
    name: 'fury swipes',
    type: 'normal',
    category: 'physical',
    power: 18,
    accuracy: 0.8,
    pp: 15,
  },
  {
    name: 'glare',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 0.75,
    pp: 30,
    effect: ['30% chance to paralyze the target.'],
  },
  {
    name: 'growl',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 1,
    pp: 40,
    effect: {
      stat: 'attack',
      stages: -1,
    },
  },
  {
    name: 'growth',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 40,
    effect: {
      stat: 'special',
      stages: 1,
    },
  },
  {
    name: 'guillotine',
    type: 'normal',
    category: 'physical',
    power: null,
    accuracy: null,
    pp: 5,
  },
  {
    name: 'gust',
    type: 'normal',
    category: 'special',
    power: 40,
    accuracy: 1,
    pp: 35,
  },
  {
    name: 'harden',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 30,
    effect: {
      stat: 'defense',
      stages: 1,
    },
  },
  {
    name: 'haze',
    type: 'ice',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 30,
  },
  {
    name: 'headbutt',
    type: 'normal',
    category: 'physical',
    power: 70,
    accuracy: 1,
    pp: 15,
    effect: ['30% chance to flinch the target.'],
  },
  {
    name: 'high jump kick',
    type: 'fighting',
    category: 'physical',
    power: 85,
    accuracy: 0.9,
    pp: 20,
  },
  {
    name: 'horn attack',
    type: 'normal',
    category: 'physical',
    power: 65,
    accuracy: 1,
    pp: 25,
  },
  {
    name: 'horn drill',
    type: 'normal',
    category: 'physical',
    power: null,
    accuracy: null,
    pp: 5,
  },
  {
    name: 'hydro pump',
    type: 'water',
    category: 'special',
    power: 120,
    accuracy: 0.8,
    pp: 5,
  },
  {
    name: 'hyper beam',
    type: 'normal',
    category: 'special',
    power: 150,
    accuracy: 0.9,
    pp: 5,
  },
  {
    name: 'hyper fang',
    type: 'normal',
    category: 'physical',
    power: 80,
    accuracy: 0.9,
    pp: 15,
    effect: ['10% chance to flinch the target.'],
  },
  {
    name: 'hypnosis',
    type: 'psychic',
    category: 'status',
    power: null,
    accuracy: 0.6,
    pp: 20,
    effect: ['Causes the target to fall asleep.'],
  },
  {
    name: 'ice beam',
    type: 'ice',
    category: 'special',
    power: 95,
    accuracy: 1,
    pp: 10,
    effect: ['10% chance to freeze the target.'],
  },
  {
    name: 'ice punch',
    type: 'ice',
    category: 'physical',
    power: 75,
    accuracy: 1,
    pp: 15,
    effect: ['10% chance to freeze the target.'],
  },
  {
    name: 'jump kick',
    type: 'fighting',
    category: 'physical',
    power: 70,
    accuracy: 0.95,
    pp: 25,
  },
  {
    name: 'karate chop',
    type: 'normal',
    category: 'physical',
    power: 50,
    accuracy: 1,
    pp: 25,
    highCriticalHitRatio: true,
  },
  {
    name: 'kinesis',
    type: 'psychic',
    category: 'status',
    power: null,
    accuracy: 0.8,
    pp: 15,
    effect: {
      stat: 'accuracy',
      stages: -1,
    },
  },
  {
    name: 'leech life',
    type: 'bug',
    category: 'physical',
    power: 20,
    accuracy: 1,
    pp: 15,
  },
  {
    name: 'leech seed',
    type: 'grass',
    category: 'status',
    power: null,
    accuracy: 0.9,
    pp: 10,
  },
  {
    name: 'leer',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 1,
    pp: 30,
    effect: {
      stat: 'defense',
      stages: -1,
    },
  },
  {
    name: 'lick',
    type: 'ghost',
    category: 'physical',
    power: 20,
    accuracy: 1,
    pp: 30,

    effect: ['30% chance to paralyze the target.'],
  },
  {
    name: 'light screen',
    type: 'psychic',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 30,
  },
  {
    name: 'lovely kiss',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 0.75,
    pp: 10,
    effect: ['Causes the target to fall asleep.'],
  },
  {
    name: 'low kick',
    type: 'fighting',
    category: 'physical',
    power: 50,
    accuracy: 0.9,
    pp: 20,
    effect: ['30% chance to flinch the target.'],
  },
  {
    name: 'meditate',
    type: 'psychic',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 40,
    effect: {
      stat: 'attack',
      stages: 1,
    },
  },
  {
    name: 'mega drain',
    type: 'grass',
    category: 'special',
    power: 40,
    accuracy: 1,
    pp: 10,
  },
  {
    name: 'mega kick',
    type: 'normal',
    category: 'physical',
    power: 120,
    accuracy: 0.75,
    pp: 5,
  },
  {
    name: 'mega punch',
    type: 'normal',
    category: 'physical',
    power: 80,
    accuracy: 0.85,
    pp: 20,
  },
  {
    name: 'metronome',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 10,
  },
  {
    name: 'mimic',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 10,
  },
  {
    name: 'minimize',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 20,
    effect: {
      stat: 'evasiveness',
      stages: 1,
    },
  },
  {
    name: 'mirror move',
    type: 'flying',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 20,
  },
  {
    name: 'mist',
    type: 'ice',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 30,
  },
  {
    name: 'night shade',
    type: 'ghost',
    category: 'special',
    power: null,
    accuracy: 1,
    pp: 15,
  },
  {
    name: 'pay day',
    type: 'normal',
    category: 'physical',
    power: 40,
    accuracy: 1,
    pp: 20,
  },
  {
    name: 'peck',
    type: 'flying',
    category: 'physical',
    power: 35,
    accuracy: 1,
    pp: 35,
  },
  {
    name: 'petal dance',
    type: 'grass',
    category: 'special',
    power: 120,
    accuracy: 1,
    pp: 10,
  },
  {
    name: 'pin missile',
    type: 'bug',
    category: 'physical',
    power: 14,
    accuracy: 0.85,
    pp: 20,
  },
  {
    name: 'poison gas',
    type: 'poison',
    category: 'status',
    power: null,
    accuracy: 0.55,
    pp: 40,
    effect: ['Poisons the target.'],
  },
  {
    name: 'poison powder',
    type: 'poison',
    category: 'status',
    power: null,
    accuracy: 0.75,
    pp: 35,

    effect: ['Poisons the target.'],
  },
  {
    name: 'poison sting',
    type: 'poison',
    category: 'physical',
    power: 15,
    accuracy: 1,
    pp: 35,
    effect: ['30% chance to poison the target.'],
  },
  {
    name: 'pound',
    type: 'normal',
    category: 'physical',
    power: 40,
    accuracy: 1,
    pp: 35,
  },
  {
    name: 'psybeam',
    type: 'psychic',
    category: 'special',
    power: 65,
    accuracy: 1,
    pp: 20,
    effect: ['10% chance to confuse the target.'],
  },
  {
    name: 'psychic',
    type: 'psychic',
    category: 'special',
    power: 90,
    accuracy: 1,
    pp: 10,
    effect: "30% chance to lower user's special by 1.",
  },
  {
    name: 'psywave',
    type: 'psychic',
    category: 'special',
    power: null,
    accuracy: 0.8,
    pp: 15,
  },
  {
    name: 'quick attack',
    type: 'normal',
    category: 'physical',
    power: 40,
    accuracy: 1,
    pp: 30,
    priority: 1,
  },
  {
    name: 'rage',
    type: 'normal',
    category: 'physical',
    power: 20,
    accuracy: 1,
    pp: 20,
  },
  {
    name: 'razor leaf',
    type: 'grass',
    category: 'physical',
    power: 55,
    accuracy: 0.95,
    pp: 25,
    highCriticalHitRatio: true,
  },
  {
    name: 'razor wind',
    type: 'normal',
    category: 'special',
    power: 80,
    accuracy: 0.75,
    pp: 10,
  },
  {
    name: 'recover',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 20,
  },
  {
    name: 'reflect',
    type: 'psychic',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 20,
  },
  {
    name: 'rest',
    type: 'psychic',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 10,
  },
  {
    name: 'roar',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 1,
    pp: 20,
  },
  {
    name: 'rock slide',
    type: 'rock',
    category: 'physical',
    power: 75,
    accuracy: 0.9,
    pp: 10,
    effect: ['30% chance to flinch the target.'],
  },
  {
    name: 'rock throw',
    type: 'rock',
    category: 'physical',
    power: 50,
    accuracy: 0.65,
    pp: 15,
  },
  {
    name: 'rolling kick',
    type: 'fighting',
    category: 'physical',
    power: 60,
    accuracy: 0.85,
    pp: 15,
    effect: ['30% chance to flinch the target.'],
  },
  {
    name: 'sand attack',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 1,
    pp: 15,
    effect: {
      stat: 'accuracy',
      stages: -1,
    },
  },
  {
    name: 'scratch',
    type: 'normal',
    category: 'physical',
    power: 40,
    accuracy: 1,
    pp: 35,
  },
  {
    name: 'screech',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 0.85,
    pp: 40,
    effect: {
      stat: 'defense',
      stages: -2,
    },
  },
  {
    name: 'seismic toss',
    type: 'fighting',
    category: 'physical',
    power: null,
    accuracy: 1,
    pp: 20,
  },
  {
    name: 'self-destruct',
    type: 'normal',
    category: 'physical',
    power: 200,
    accuracy: 1,
    pp: 5,
  },
  {
    name: 'sharpen',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 30,
    effect: {
      stat: 'attack',
      stages: 1,
    },
  },
  {
    name: 'sing',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 0.55,
    pp: 15,
    effect: ['Causes the target to fall asleep.'],
  },
  {
    name: 'skull bash',
    type: 'normal',
    category: 'physical',
    power: 100,
    accuracy: 1,
    pp: 15,
  },
  {
    name: 'sky attack',
    type: 'flying',
    category: 'physical',
    power: 140,
    accuracy: 0.9,
    pp: 5,
  },
  {
    name: 'slam',
    type: 'normal',
    category: 'physical',
    power: 80,
    accuracy: 0.75,
    pp: 20,
  },
  {
    name: 'slash',
    type: 'normal',
    category: 'physical',
    power: 70,
    accuracy: 1,
    pp: 20,
    highCriticalHitRatio: true,
  },
  {
    name: 'sleep powder',
    type: 'grass',
    category: 'status',
    power: null,
    accuracy: 0.75,
    pp: 15,
    effect: ['Causes the target to fall asleep.'],
  },
  {
    name: 'sludge',
    type: 'poison',
    category: 'special',
    power: 65,
    accuracy: 1,
    pp: 20,
    effect: ['30% chance to poison the target.'],
  },
  {
    name: 'smog',
    type: 'poison',
    category: 'special',
    power: 20,
    accuracy: 0.7,
    pp: 20,
    effect: ['40% chance to poison the target.'],
  },
  {
    name: 'smokescreen',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 1,
    pp: 20,
    effect: {
      stat: 'accuracy',
      stages: -1,
    },
  },
  {
    name: 'soft-boiled',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 10,
  },
  {
    name: 'solar beam',
    type: 'grass',
    category: 'special',
    power: 120,
    accuracy: 1,
    pp: 10,
  },
  {
    name: 'sonic boom',
    type: 'normal',
    category: 'special',
    power: null,
    accuracy: 0.9,
    pp: 20,
  },
  {
    name: 'spike cannon',
    type: 'normal',
    category: 'physical',
    power: 20,
    accuracy: 1,
    pp: 15,
  },
  {
    name: 'splash',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 40,
  },
  {
    name: 'spore',
    type: 'grass',
    category: 'status',
    power: null,
    accuracy: 1,
    pp: 15,
    effect: ['Causes the target to fall asleep.'],
  },
  {
    name: 'stomp',
    type: 'normal',
    category: 'physical',
    power: 65,
    accuracy: 1,
    pp: 20,
    effect: ['30% chance to flinch the target.'],
  },
  {
    name: 'strength',
    type: 'normal',
    category: 'physical',
    power: 80,
    accuracy: 1,
    pp: 15,
  },
  {
    name: 'string shot',
    type: 'bug',
    category: 'status',
    power: null,
    accuracy: 0.95,
    pp: 40,
    effect: {
      stat: 'speed',
      stages: -1,
    },
  },
  {
    name: 'struggle',
    type: 'normal',
    category: 'physical',
    power: 50,
    accuracy: 1,
    pp: null,
  },
  {
    name: 'stun spore',
    type: 'grass',
    category: 'status',
    power: null,
    accuracy: 0.75,
    pp: 30,
    effect: ['Paralyzes the target.'],
  },
  {
    name: 'submission',
    type: 'fighting',
    category: 'physical',
    power: 80,
    accuracy: 0.8,
    pp: 25,
  },
  {
    name: 'substitute',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 10,
  },
  {
    name: 'super fang',
    type: 'normal',
    category: 'physical',
    power: null,
    accuracy: 0.9,
    pp: 10,
  },
  {
    name: 'supersonic',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 0.55,
    pp: 20,
    effect: ['Confuses the target.'],
  },
  {
    name: 'surf',
    type: 'water',
    category: 'special',
    power: 95,
    accuracy: 1,
    pp: 15,
  },
  {
    name: 'swift',
    type: 'normal',
    category: 'special',
    power: 60,
    accuracy: null,
    pp: 20,
  },
  {
    name: 'swords dance',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 30,
    effect: {
      stat: 'attack',
      stages: 2,
    },
  },
  {
    name: 'tackle',
    type: 'normal',
    category: 'physical',
    power: 35,
    accuracy: 0.95,
    pp: 35,
  },
  {
    name: 'tail whip',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 1,
    pp: 30,
    effect: {
      stat: 'defense',
      stages: -1,
    },
  },
  {
    name: 'take down',
    type: 'normal',
    category: 'physical',
    power: 90,
    accuracy: 0.85,
    pp: 20,
  },
  {
    name: 'teleport',
    type: 'psychic',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 20,
  },
  {
    name: 'thrash',
    type: 'normal',
    category: 'physical',
    power: 120,
    accuracy: 1,
    pp: 10,
  },
  {
    name: 'thunder',
    type: 'electric',
    category: 'special',
    power: 120,
    accuracy: 0.7,
    pp: 10,
    effect: ['10% chance to paralyze the target.'],
  },
  {
    name: 'thunder punch',
    type: 'electric',
    category: 'physical',
    power: 75,
    accuracy: 1,
    pp: 15,
    effect: ['10% chance to paralyze the target.'],
  },
  {
    name: 'thunder shock',
    type: 'electric',
    category: 'special',
    power: 40,
    accuracy: 1,
    pp: 30,
    effect: ['10% chance to paralyze the target.'],
  },
  {
    name: 'thunder wave',
    type: 'electric',
    category: 'status',
    power: null,
    accuracy: 1,
    pp: 20,
    effect: ['Paralyzes the target.'],
  },
  {
    name: 'thunderbolt',
    type: 'electric',
    category: 'special',
    power: 95,
    accuracy: 1,
    pp: 15,
    effect: ['10% chance to paralyze the target.'],
  },
  {
    name: 'toxic',
    type: 'poison',
    category: 'status',
    power: null,
    accuracy: 0.85,
    pp: 10,
    effect: ['Badly poisons the target.'],
  },
  {
    name: 'transform',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 10,
  },
  {
    name: 'tri attack',
    type: 'normal',
    category: 'special',
    power: 80,
    accuracy: 1,
    pp: 10,
  },
  {
    name: 'twineedle',
    type: 'bug',
    category: 'physical',
    power: 25,
    accuracy: 1,
    pp: 20,
  },
  {
    name: 'vice grip',
    type: 'normal',
    category: 'physical',
    power: 55,
    accuracy: 1,
    pp: 30,
  },
  {
    name: 'vine whip',
    type: 'grass',
    category: 'physical',
    power: 35,
    accuracy: 1,
    pp: 10,
  },
  {
    name: 'water gun',
    type: 'water',
    category: 'special',
    power: 40,
    accuracy: 1,
    pp: 25,
  },
  {
    name: 'waterfall',
    type: 'water',
    category: 'physical',
    power: 80,
    accuracy: 1,
    pp: 15,
  },
  {
    name: 'whirlwind',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: 0.85,
    pp: 20,
  },
  {
    name: 'wing attack',
    type: 'flying',
    category: 'physical',
    power: 35,
    accuracy: 1,
    pp: 35,
  },
  {
    name: 'withdraw',
    type: 'water',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 40,
    effect: {
      stat: 'defense',
      stages: 1,
    },
  },
  {
    name: 'wrap',
    type: 'normal',
    category: 'physical',
    power: 15,
    accuracy: 0.9,
    pp: 20,
  },
];

const checkMovez = (movez: any) => {
  for (let i = 0; i < movez.length; i++) {
    if (!movez[i].effect) {
      console.log(movez[i]);
    }

    // if (movez[i].effect.stages < 0) {
    //   movez[i].effect = `Lowers user's ${movez[i].effect.stat} by ${Math.abs(
    //     movez[i].effect.stages
    //   )}.`;
    // } else if (movez[i].effect.stages > 0) {
    //   movez[
    //     i
    //   ].effect = `Raises user's ${movez[i].effect.stat} by ${movez[i].effect.stages}.`;
    // }
  }
  console.log(movez);
};

// https://github.com/fanzeyi/pokemon.json/blob/master/moves.json
const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  const [pokemon, setPokemon] = useState([]);

  const pokeSearch = async () => {
    await fetch('/json/gen1.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  };

  useEffect(() => {
    pokeSearch();
    checkMovez(movez);
  }, []);

  return (
    <>
      <Head>
        <title>Cloyster: Pokémon Team Builder</title>
        <meta name='description' content='Pokémon Team Builder' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto flex min-h-screen flex-col items-center justify-center p-4'>
        <div>
          <h1 className='text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]'>
            Closyer
          </h1>
          <img src='/images/pokemon/cloyster.png' />
        </div>
        <p className='text-2xl text-gray-700'>This stack uses:</p>
        <div className='mt-3 grid gap-3 pt-3 text-center md:grid-cols-2 lg:w-2/3'>
          <TechnologyCard
            name='NextJS'
            description='The React framework for production'
            documentation='https://nextjs.org/'
          />
          <TechnologyCard
            name='TypeScript'
            description='Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale'
            documentation='https://www.typescriptlang.org/'
          />
          <TechnologyCard
            name='TailwindCSS'
            description='Rapidly build modern websites without ever leaving your HTML'
            documentation='https://tailwindcss.com/'
          />
          <TechnologyCard
            name='tRPC'
            description='End-to-end typesafe APIs made easy'
            documentation='https://trpc.io/'
          />
          <TechnologyCard
            name='Next-Auth'
            description='Authentication for Next.js'
            documentation='https://next-auth.js.org/'
          />
          <TechnologyCard
            name='Prisma'
            description='Build data-driven JavaScript & TypeScript apps in less time'
            documentation='https://www.prisma.io/docs/'
          />
        </div>
        <div className='flex w-full items-center justify-center pt-6 text-2xl text-blue-500'>
          {/* {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>} */}
          <ul>
            {pokemon.map((mon: any, i: number) => (
              <div>
                <li key={i}>{mon.name}</li>
                <img src={mon.sprite} />
                <img src={mon.icon} />
              </div>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className='flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105'>
      <h2 className='text-lg text-gray-700'>{name}</h2>
      <p className='text-sm text-gray-600'>{description}</p>
      <a
        className='mt-3 text-sm text-violet-500 underline decoration-dotted underline-offset-2'
        href={documentation}
        target='_blank'
        rel='noreferrer'
      >
        Documentation
      </a>
    </section>
  );
};
