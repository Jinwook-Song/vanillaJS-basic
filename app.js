class Counter {
  constructor({ initialNumber = 0, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.counter.innerText = initialNumber;
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListners();
  }
  addEventListners = () => {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  };
  increase = () => {
    this.count += 1;
    this.repaintCount();
  };
  decrease = () => {
    this.count -= 1;
    this.repaintCount();
  };
  repaintCount = () => {
    this.counter.innerText = this.count;
  };
}

new Counter({ counterId: "count", plusId: "plus", minusId: "minus" });
new Counter({
  initialNumber: 540,
  counterId: "count2",
  plusId: "plus2",
  minusId: "minus2",
});
