import React from "react";
import './strategySort.css'

export  function StrategySort({ handleClick, sortChoose }) {
  return (

    <div className="strategy-sort-content">
      <h4 > SORT</h4 >
      <div className="strategy-sort-items">
        <div id="return"
          onClick={handleClick}
          className={sortChoose.return ? "strategy-sort-item sort-chosen" : "strategy-sort-item"}>
          <pre>Return</pre>
        </div>
        <div id="multiTimeFrame"
          onClick={handleClick}
          className={sortChoose.multiTimeFrame ? "strategy-sort-item sort-chosen" : "strategy-sort-item"}>
          <pre>multi time-frame</pre>
        </div>
        <div id='winRate'
          onClick={handleClick}
          className={sortChoose.winRate ? "strategy-sort-item sort-chosen" : "strategy-sort-item"}>
          <pre>win Rate</pre>
        </div>
        <div
          className={sortChoose.winRate ? "strategy-sort-item sort-chosen" : "strategy-sort-item"}
          onClick={handleClick}>
          <pre>win Rate</pre>
        </div>
      </div>

    </div >
  );
}