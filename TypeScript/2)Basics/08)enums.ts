// const AISLE = 0;
// const MIDLLE = 1;
// const WINDOW = 2;

enum SeatChoice {
  AISLE, // By default value : 0
  MIDLLE, // By default value : 1
  WINDOW, // By default value : 2
  FOURTH, // By default value : 3
}
enum SeatChoice2 {
  AISLE = 10,
  MIDLLE, // By default value : 11
  WINDOW, // By default value : 12
  FOURTH, // By default value : 13
}
enum SeatChoice3 {
  AISLE = 10,
  MIDLLE = 22,
  WINDOW, // By default value : 23
  FOURTH, // By default value : 24
}
enum SeatChoice4 {
  AISLE = "aisle",
  MIDLLE = "middle",
  WINDOW = "window",
  FOURTH = 0,
}
enum SeatChoice5 {
  AISLE = "aisle",
  MIDLLE = 2,
  WINDOW, // By default value : 3
  FOURTH, // By default value : 4
}

// When we declare a enum an iife is created

// but if we add "const" in front of it , It won't generate any unnecessary code only generate that much code is needed
const enum SeatChoice6 {
  AISLE, // By default value : 0
  MIDLLE, // By default value : 1
  WINDOW, // By default value : 2
  FOURTH, // By default value : 3
}

const daveSeat = SeatChoice.AISLE;
const davidSeat = SeatChoice.FOURTH;

export {};
