abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // Calculation
    return 8;
  }
}

// When using abstract class we cant make object directly from it

// const david2 = new TakePhoto("Test", "Test", 3);

class Instagram extends TakePhoto {
  constructor(
    public cameramode: string,
    public filter: string,
    public burst: number // Extra
  ) {
    super(cameramode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const david = new Instagram("Test", "Test", 13);

const time = david.getReelTime();
console.log(time)
