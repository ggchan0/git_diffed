var NewComponent = React.createClass({
  render: function() {
    return (

        <link rel="stylesheet" href="final_code_snippet.css" />
        <title> Code Snippet </title>
        <div>
          <div className="outer">
            <div className="contentleft">
              <img src="github%20anon.png" />
              <p>Pauline Smith</p>
              <p id="username"> @pauline </p>
              <textarea defaultValue={"import Foundation\nimport CoreGraphics\n\n/// Chart that draws bars.\npublic class BarChartView: BarLineChartViewBase, BarChartDataProvider\n{\n    /// flag that enables or disables the highlighting arrow\n    private var _drawHighlightArrowEnabled = false\n    \n    /// if set to true, all values are drawn above their bars, instead of below their top\n    private var _drawValueAboveBarEnabled = true\n\n    /// if set to true, a grey area is drawn behind each bar that indicates the maximum value\n    private var _drawBarShadowEnabled = false\n    \n    internal override func initialize()\n    {\n        super.initialize()\n        \n        renderer = BarChartRenderer(dataProvider: self, animator: _animator, viewPortHandler: _viewPortHandler)\n        _xAxisRenderer = ChartXAxisRendererBarChart(viewPortHandler: _viewPortHandler, xAxis: _xAxis, transformer: _leftAxisTransformer, chart: self)\n        \n        self.highlighter = BarChartHighlighter(chart: self)\n        \n        _xAxis._axisMinimum = -0.5\n    }\n                "} />
              <p id="comment"> No Comments </p>
              <div className="tableleft">
                <p>
                  <strong> Project </strong>
                </p>
                <p>
                  <strong> Language </strong>
                </p>
                <p>
                  <strong> IDE </strong>
                </p>
                <p>
                  <strong> Date Created </strong>
                </p>
                <p>
                  <strong> Date Modified </strong>
                </p>
              </div>
              <div className="tableright">
                <p>IOS Application</p>
                <p>Swift</p>
                <p>Xcode</p>
                <p>8/2/16</p>
                <p>8/16/16</p>
              </div>
            </div>
            <div className="contentright">
              <img src="github%20anon.png" />
              <p>Joe Baker</p>
              <p id="username"> @joeb </p>
              <textarea defaultValue={"import Foundation\nimport CoreGraphics\n\n\npublic class ChartBaseDataSet: NSObject, IChartDataSet\n{\n    public required override init()\n    {\n        super.init()\n        \n        // default color\n        colors.append(NSUIColor(red: 140.0/255.0, green: 234.0/255.0, blue: 255.0/255.0, alpha: 1.0))\n        valueColors.append(NSUIColor.blackColor())\n    }\n    \n    public init(label: String?)\n    {\n        super.init()\n        \n        // default color\n        colors.append(NSUIColor(red: 140.0/255.0, green: 234.0/255.0, blue: 255.0/255.0, alpha: 1.0))\n        valueColors.append(NSUIColor.blackColor())\n\n                "} />
              <p id="comment"> No Comments </p>
              <div className="tableleft">
                <p>
                  <strong> Project </strong>
                </p>
                <p>
                  <strong> Language </strong>
                </p>
                <p>
                  <strong> IDE </strong>
                </p>
                <p>
                  <strong> Date Created </strong>
                </p>
                <p>
                  <strong> Date Modified </strong>
                </p>
              </div>
              <div className="tableright">
                <p>IOS Application</p>
                <p>Swift</p>
                <p>Eclipse</p>
                <p>3/7/14</p>
                <p>3/12/14</p>
              </div>
            </div>
          </div>
        </div>

    );
  }
});