const chords = {
  cMajor: {
    title: 'C',
    notes: 'G-C-E',
    src: './chords-audio/C.m4a'
  },
  cMinor: {
    title: 'Cm',
    notes: 'G-C-Eb',
    src: './chords-audio/Cm.m4a'
  },
  cSharp: {
    title: 'Cs_Db',
    notes: 'G#-C#-F',
    src: './chords-audio/Cs-Db.m4a'
  },
  cSharpMinor: {
    title: 'Csm_Dbm',
    notes: 'G#-D#-E',
    src: './chords-audio/Csm-Dbm.m4a'
  },
  cDim: {
    title: 'Cdim',
    notes: 'C-D#-F#',
    src: './chords-audio/Cdim.m4a'
  },
  cSharpDim: {
    title: 'Csdim_Dbdim',
    notes: 'C#-E-G',
    src: './chords-audio/Csdim-Dbdim.m4a'
  },
  dMajor: {
    title: 'D',
    notes: 'A-D-F#',
    src: './chords-audio/D.m4a'
  },
  dMinor: {
    title: 'Dm',
    notes: 'A-D-F',
    src: './chords-audio/Dm.m4a'
  },
  dSharp: {
    title: 'Ds_Eb',
    notes: 'G-A#-D#',
    src: './chords-audio/Ds-Eb.m4a'
  },
  dSharpMinor: {
    title: 'Dsm_Ebm',
    notes: 'F#-A#-D#',
    src: './chords-audio/Ds-Ebm.m4a'
  },
  dDim: {
    title: 'Ddim',
    notes: 'D-F-G#',
    src: './chords-audio/Ddim.m4a'
  },
  dSharpDim: {
    title: 'Dsdim_Ebdim',
    notes: 'F#-A-D#',
    src: './chords-audio/Dsdim-Ebdim.m4a'
  },
  eMajor: {
    title: 'E',
    notes: 'G#-B-D',
    src: './chords-audio/E.m4a'
  },
  eMinor: {
    title: 'Em',
    notes: 'G-B-D',
    src: './chords-audio/Em.m4a'
  },
  eDim: {
    title: 'Edim',
    notes: 'G-A#-E',
    src: './chords-audio/Em.m4a'
  },
  fMajor: {
    title: 'F',
    notes: 'A-C-F',
    src: './chords-audio/F.m4a'
  },
  fMinor: {
    title: 'Fm',
    notes: 'Ab-C-F',
    src: './chords-audio/Fm.m4a'
  },
  fSharp: {
    title: 'Fs_Gb',
    notes: 'A#-C#-F#',
    src: './chords-audio/Fs-Gb.m4a'
  },
  fSharpMinor: {
    title: 'Fsm_Gbm',
    notes: 'A-C#-F#',
    src: './chords-audio/Fsm-Gbm.m4a'
  },
  fDim: {
    title: 'Fdim',
    notes: 'G#-B-F',
    src: './chords-audio/Fdim.m4a'
  },
  fSharpDim: {
    title: 'Fsdim_Gbdim',
    notes: 'A-C-F#',
    src: './chords-audio/Fsdim-Gbdim.m4a'
  },
  gMajor: {
    title: 'G',
    notes: 'B-D-G',
    src: './chords-audio/G.m4a'
  },
  gMinor: {
    title: 'Gm',
    notes: 'Bb-D-G',
    src: './chords-audio/Gm.m4a'
  },
  gSharp: {
    title: 'Gs_Ab',
    notes: 'C-D#-G#',
    src: './chords-audio/Gs-Ab.m4a'
  },
  gSharpMinor: {
    title: 'Gsm_Abm',
    notes: 'B-D#-G#',
    src: './chords-audio/Gsm-Abm.m4a'
  },
  gDim: {
    title: 'Gdim',
    notes: 'A#-C#-G',
    src: './chords-audio/Gdim.m4a'
  },
  gSharpDim: {
    title: 'Gsdim_Abdim',
    notes: 'B-D-G#',
    src: './chords-audio/Gsdim-Abdim.m4a'
  },
  aMajor: {
    title: 'A',
    notes: 'E-A-C#',
    src: './chords-audio/A.m4a'
  },
  aMinor: {
    title: 'Am',
    notes: 'E-A-C',
    src: './chords-audio/Am.m4a'
  },
  aSharp: {
    title: 'As_Bb',
    notes: 'F-A#-D',
    src: './chords-audio/As-Bb.m4a'
  },
  aSharpMinor: {
    title: 'Asm_Bbm',
    notes: 'F-A#-Db',
    src: './chords-audio/Asm-Bbm.m4a'
  },
  aDim: {
    title: 'Adim',
    notes: 'A-C-D#',
    src: './chords-audio/Adim.m4a'
  },
  aSharpDim: {
    title: 'Asdim_Bbdim',
    notes: 'A#-C#-E',
    src: './chords-audio/Asdim-Bbdim.m4a'
  },
  bMajor: {
    title: 'B',
    notes: 'F#-B-D#',
    src: './chords-audio/B.m4a'
  },
  bMinor: {
    title: 'Bm',
    notes: 'F#-B-D',
    src: './chords-audio/Bm.m4a'
  },
  bDim: {
    title: 'Bdim',
    notes: 'B-D-F',
    src: './chords-audio/Bdim.m4a'
  },
}

const keys = {
  C: [
    chords.cMajor,
    chords.dMinor,
    chords.eMinor,
    chords.fMajor,
    chords.gMajor,
    chords.aMinor,
    chords.bDim
  ],
  Cm: [
    chords.cMinor,
    chords.dDim,
    chords.dSharp, // Eb == D#
    chords.fMinor,
    chords.gMinor,
    chords.gSharp, // Ab == G#
    chords.aSharp // A# == Bb
  ],
  Cs: [
    chords.cSharp,
    chords.dSharpMinor,
    chords.fMinor,
    chords.fSharp,
    chords.gSharp,
    chords.aSharpMinor,
    chords.cDim
  ],
  Csm: [
    chords.cSharpMinor,
    chords.dSharpDim,
    chords.eMajor,
    chords.fSharpMinor,
    chords.gSharpMinor,
    chords.aMajor,
    chords.bMajor
  ],
  D: [
    chords.dMajor,
    chords.eMinor,
    chords.fSharpMinor,
    chords.gMajor,
    chords.aMajor,
    chords.bMinor,
    chords.cSharpDim
  ],
  Dm: [
    chords.dMinor,
    chords.eDim,
    chords.fMajor,
    chords.gMinor,
    chords.aMinor,
    chords.aSharpMinor,
    chords.cMajor
  ],
  Ds: [
    chords.dSharp,
    chords.fMinor,
    chords.gMinor,
    chords.gSharp,
    chords.aSharp,
    chords.cMinor,
    chords.dDim
  ],
  Dsm: [
    chords.dSharpMinor,
    chords.fDim,
    chords.fSharp,
    chords.gSharpMinor,
    chords.aSharpMinor,
    chords.bMajor,
    chords.cSharp
  ],
  E: [
    chords.eMajor,
    chords.fSharpMinor,
    chords.gSharpMinor,
    chords.aMajor,
    chords.bMajor,
    chords.cSharpMinor,
    chords.dSharpDim
  ],
  F: [
    chords.fMajor,
    chords.gMinor,
    chords.aMinor,
    chords.aSharp,
    chords.cMajor,
    chords.dMinor,
    chords.eDim
  ],
  Fm: [
    chords.fMinor,
    chords.gDim,
    chords.gSharp,
    chords.aSharpMinor,
    chords.cMinor,
    chords.cSharpMinor,
    chords.dSharp
  ],
  Fs: [
    chords.fSharp,
    chords.gSharpMinor,
    chords.aSharpMinor,
    chords.bMajor,
    chords.cSharp,
    chords.dSharpMinor,
    chords.fDim
  ],
  Fsm: [
    chords.fSharpMinor,
    chords.gSharpDim,
    chords.aMajor,
    chords.bMinor,
    chords.cSharpMinor,
    chords.dMajor,
    chords.eMajor
  ],
  G: [
    chords.gMajor,
    chords.aMinor,
    chords.bMinor,
    chords.cMajor,
    chords.dMajor,
    chords.eMinor,
    chords.fSharpDim
  ],
  Gm: [
    chords.gMinor,
    chords.aDim,
    chords.aSharp,
    chords.cMinor,
    chords.dMinor,
    chords.dSharp,
    chords.fMajor
  ],
  Gs: [
    chords.gSharp,
    chords.aSharpMinor,
    chords.cMinor,
    chords.cSharp,
    chords.dSharp,
    chords.fMinor,
    chords.gDim
  ],
  Gsm: [
    chords.gSharpMinor,
    chords.aSharpDim,
    chords.bMajor,
    chords.cSharpMinor,
    chords.dSharpMinor,
    chords.eMajor,
    chords.fSharp
  ],
  A: [
    chords.aMajor,
    chords.bMinor,
    chords.cSharpMinor,
    chords.dMajor,
    chords.eMajor,
    chords.fSharpMinor,
    chords.gSharpDim
  ],
  Am: [
    chords.aMinor,
    chords.bDim,
    chords.cMajor,
    chords.dMinor,
    chords.eMinor,
    chords.fMajor,
    chords.gMajor
  ],
  As: [
    chords.aSharp,
    chords.cMinor,
    chords.dMinor,
    chords.dSharp,
    chords.fMajor,
    chords.gMinor,
    chords.aDim
  ],
  Asm: [
    chords.aSharpMinor,
    chords.cDim,
    chords.cSharp,
    chords.dSharpMinor,
    chords.fMinor,
    chords.fSharp,
    chords.gSharp
  ],
  B: [
    chords.bMajor,
    chords.cSharpMinor,
    chords.dSharpMinor,
    chords.eMajor,
    chords.fSharp,
    chords.gSharpMinor,
    chords.aSharpDim
  ],
  Bm: [
    chords.bMinor,
    chords.cSharpDim,
    chords.dMajor,
    chords.eMinor,
    chords.fSharpMinor,
    chords.gMajor,
    chords.aMajor
  ],
}