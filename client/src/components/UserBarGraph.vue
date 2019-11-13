<script>
    import { Bar } from "vue-chartjs";

    export default {
        extends: Bar,
        props: {
          bargraphdata : {
              type: Object,
              default: null,
          },
        },
        mounted() {
            this.renderChart(this.bargraphdata, {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                       ticks: {
                           beginAtZero: true
                       }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
            });
        }
    };
</script>
