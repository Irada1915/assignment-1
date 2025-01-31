document.addEventListener("DOMContentLoaded", function () {
    //  Bar chart
    const artistEarningsData = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: "Screen time (hours)",
            data: [9, 7, 14, 11, 12, 15, 10],
            backgroundColor: "#EFB6C8"
        }]
    };
    const revenueDistributionData = {
        labels: ["Social", "Entertainment", "Productivity and Finance", "Other"],
        datasets: [{
            label: "Percentage",
            data: [50, 30, 15, 5],
            backgroundColor: ["#EFB6C8", "#A888B5", "#8174A0", "#441752"]
        }]
    };
    const streamingGrowthData = {
        labels: ["11:00 PM", "3:00 AM", "6:00 AM", "9:00 AM", "12:00 AM", "15:00 AM", "18:00 PM", "21:00 PM"],
        datasets: [{
            label: "Minutes",
            data: [60, 0, 20, 30, 60, 30, 20, 60],
            backgroundColor: "#441752",
        }]
    };
    // Создание столбчатой диаграммы
    new Chart(document.getElementById("myChart3"), {
        type: "bar",
        data: artistEarningsData,
        options: { responsive: true }
    });
    // Создание круговой диаграммы
    new Chart(document.getElementById("myChart2"), {
        type: "pie",
        data: revenueDistributionData,
        options: { responsive: true }
    });
    // Создание линейного графика
    new Chart(document.getElementById("myChart"), {
        type: "line",
        data: streamingGrowthData,
        options: { responsive: true }
    });
});
